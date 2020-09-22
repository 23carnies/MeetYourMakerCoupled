import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CalendarEvent from '../../components/CalendarEvent/CalendarEvent'

export default class Calendar extends Component {
  render() {
    return (
      <>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
            { title: 'Sellers Market in East Atlanta', date: '2020-09-21'}
        ]}
      />
      <CalendarEvent
          handleAddCalendarEvent = {this.props.handleAddCalendarEvent}
          history={this.props.history}
      />
      </>
    )
  }
}