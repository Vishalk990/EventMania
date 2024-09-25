import { useState, useEffect } from "react";
import moment from "moment";
import { Video, Info } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { eventData } from "@/utils/eventData";

const EventDashboard = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [progress, setProgress] = useState(0);
  const [date, setDate] = useState(new Date());
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);

  useEffect(() => {
    // Find the current or next upcoming event
    const now = moment();
    const currentOrUpcomingEvent =
      eventData.events.find((event) => moment(event.endTime).isAfter(now)) ||
      eventData.events[0];

    setCurrentEvent(currentOrUpcomingEvent);
  }, []);

  useEffect(() => {
    if (!currentEvent) return;

    const startTime = moment(currentEvent.startTime);
    const endTime = moment(currentEvent.endTime);
    const duration = endTime.diff(startTime);

    const timer = setInterval(() => {
      const now = moment();
      if (now.isBefore(startTime)) {
        setProgress(0);
      } else if (now.isAfter(endTime)) {
        setProgress(duration);
        clearInterval(timer);
      } else {
        setProgress(now.diff(startTime));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentEvent]);

  const isDayWithEvents = (day) => {
    return eventData.events.some((event) =>
      moment(event.startTime).isSame(day, "day")
    );
  };

  const getEventsForDate = (date) => {
    return eventData.events.filter((event) =>
      moment(event.startTime).isSame(date, "day")
    );
  };

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setSelectedDateEvents(getEventsForDate(selectedDate));
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
              Upcoming Events
            </h2>
            <Popover>
              <PopoverTrigger asChild>
                <div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    modifiers={{ hasEvent: isDayWithEvents }}
                    modifiersStyles={{
                      hasEvent: { backgroundColor: "rgb(199 210 254)" },
                    }}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">
                    Events on {date.toDateString()}
                  </h3>
                  {selectedDateEvents.length > 0 ? (
                    selectedDateEvents.map((event, index) => (
                      <div key={index} className="border-t pt-2">
                        <p>
                          <strong>{event.name}</strong>
                        </p>
                        <p>Guests: {event.guests.join(", ")}</p>
                        <p>
                          Time: {moment(event.startTime).format("HH:mm")} -{" "}
                          {moment(event.endTime).format("HH:mm")}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>No events on this date.</p>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Video Section */}

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
              <Video className="mr-2" size={24} />
              Current Event
            </h2>
            <div className="relative w-full h-full pb-56.25% overflow-hidden">
              <video
                className="top-0 left-0 w-full md:h-[40vh] h-full object-cover rounded-xl"
                src={eventData.currentEventVideo}
                autoPlay
                loop
                // controls
                controlsList="nodownload noremoteplayback nofullscreen"
                muted={true} // Unmute by default
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Current Event Info Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
              <Info className="mr-2" size={24} />
              Event Information
            </h2>
            {currentEvent ? (
              <div className="space-y-4">
                <p>
                  <strong>Department:</strong> {currentEvent.department}
                </p>
                <p>
                  <strong>Event Name:</strong> {currentEvent.name}
                </p>
                <p>
                  <strong>Guests:</strong> {currentEvent.guests.join(", ")}
                </p>
                <p>
                  <strong>Duration:</strong> {currentEvent.duration}
                </p>
                <div className="mt-6">
                  <p className="mb-2">
                    <strong>Event Progress:</strong>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-linear"
                      style={{
                        width: `${
                          (progress /
                            moment(currentEvent.endTime).diff(
                              moment(currentEvent.startTime)
                            )) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {Math.floor(moment.duration(progress).asMinutes())} minutes
                    elapsed out of {currentEvent.duration}
                  </p>
                </div>
              </div>
            ) : (
              <p>No current event</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
