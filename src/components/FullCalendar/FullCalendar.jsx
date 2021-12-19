import { React, Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const myApiKey = process.env.API_KEY;
const calendarId = process.env.CALENDAR_ID;


export default class Calendar extends Component    {





render(){
    return  (
        
            <FullCalendar 
                plugins={[timeGridPlugin, googleCalendarPlugin]}
                googleCalendarApiKey={myApiKey}
                weekends={true}
                slotMinTime={'08:00:00'}
                slotMaxTime={'22:00:00'}
                events={calendarId}
                />
        
    )
}
}

