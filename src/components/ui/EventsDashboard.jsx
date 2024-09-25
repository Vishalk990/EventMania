import { useState, useEffect } from "react";
import moment from "moment";
import { Calendar, Video, Info } from "lucide-react";

import { eventData } from "@/utils/eventData";

const EventDashboard = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const [progress, setProgress] = useState(0);

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

  const generateCalendar = () => {
    const today = moment();
    return Array.from({ length: 30 }, (_, i) => {
      const day = today.clone().add(i, "days");
      const eventsOnDay = eventData.events.filter((event) =>
        moment(event.startTime).isSame(day, "day")
      );
      return (
        <div
          key={i}
          className={`text-center p-2 border rounded ${
            eventsOnDay.length > 0 ? "bg-indigo-100 border-indigo-300" : ""
          }`}
        >
          <div className="font-semibold">{day.format("D")}</div>
          <div className="text-xs">{day.format("ddd")}</div>
          {eventsOnDay.length > 0 && (
            <div className="text-xs mt-1 text-indigo-600">
              {eventsOnDay.length} event(s)
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Event Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
              <Calendar className="mr-2" size={24} />
              Upcoming Events
            </h2>
            <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>
          </div>

          {/* Video Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600 flex items-center">
              <Video className="mr-2" size={24} />
              Current Event
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={eventData.currentEventVideo}
                title="Event video"
                allowFullScreen
              />
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
