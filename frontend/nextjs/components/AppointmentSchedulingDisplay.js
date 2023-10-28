import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const AppointmentSchedulingDisplay = ({ appointments }) => {
  const events = appointments.map(appointment => ({
    title: appointment.title,
    start: appointment.start,
    end: appointment.end
  }));

  return (
    <div id="appointmentDisplay">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default AppointmentSchedulingDisplay;