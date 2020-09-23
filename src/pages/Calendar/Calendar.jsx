import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import CalendarEvent from '../../components/CalendarEvent/CalendarEvent'
import * as eventAPI from "../../services/calendarEvents-api"

export default class Calendar extends Component {
  state= {
    events: []
  }

  handleAddCalendarEvent = async newEventData => {
    const newEvent = await eventAPI.create(newEventData)
    this.setState(state => ({
      events: [...state.events, newEvent],
    }), () => this.props.history.history.push('/calendar'))
}

  async componentDidMount() {
    const events = await eventAPI.getAllEvents()
    this.setState({ events })
  }
  render() {

    return (
      <>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={this.state.events}

      />
      <CalendarEvent
          handleAddCalendarEvent = {this.handleAddCalendarEvent}
          history={this.props.history}
      />
      </>
    )
  }
}