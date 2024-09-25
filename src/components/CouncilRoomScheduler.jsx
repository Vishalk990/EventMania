import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Home, Info } from 'lucide-react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const CouncilRoomScheduler = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVacant, setIsVacant] = useState(true);
  const [nextEvent, setNextEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock data for events - replace this with your API call
    const mockEvents = [
      {
        title: 'Psychology',
        department: 'Dept. of Psychology',
        start: new Date(2019, 7, 26, 14, 0), // Note: month is 0-indexed
        end: new Date(2019, 7, 26, 16, 0),
      },
      {
        title: 'Physical Education',
        department: '',
        start: new Date(2019, 7, 26, 16, 30),
        end: new Date(2019, 7, 26, 17, 30),
      },
    ];
    setEvents(mockEvents);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentEvent = events.find(event => 
      currentTime >= event.start && currentTime < event.end
    );

    setIsVacant(!currentEvent);
    setNextEvent(events.find(event => event.start > currentTime) || null);
  }, [currentTime, events]);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#3182ce',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0',
      display: 'block'
    };
    return {
      style: style
    };
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-8 bg-white shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">COUNCIL ROOM</h1>
          <div className="text-xl">{currentTime.toLocaleTimeString('en-US', { hour12: false })}</div>
        </div>
        <div className="flex items-center mb-4">
          <img src="/api/placeholder/50/50" alt="Logo" className="mr-4" />
          <h2 className="text-6xl font-bold">{isVacant ? 'VACANT' : 'OCCUPIED'}</h2>
        </div>
        <p className="text-xl">
          {isVacant 
            ? `This venue is vacant till ${nextEvent ? moment(nextEvent.start).format('HH:mm') : 'further notice'}.`
            : `This venue is occupied till ${moment(events[0].end).format('HH:mm')}.`}
        </p>
      </div>
      <div className="w-2/3 bg-blue-900 text-white p-8">
        <h2 className="text-3xl font-bold mb-4">CHRIST</h2>
        <p className="mb-4">{moment(currentTime).format('ddd, D MMM YYYY')}</p>
        <div className="h-3/4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            eventPropGetter={eventStyleGetter}
            views={['day', 'week']}
            defaultView='day'
            defaultDate={new Date(2019, 7, 26)}
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
          <button className="p-2"><CalendarIcon /></button>
          <button className="p-2"><Home /></button>
          <button className="p-2"><Info /></button>
        </div>
      </div>
    </div>
  );
};

export default CouncilRoomScheduler;