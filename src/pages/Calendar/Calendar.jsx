import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CalendarEvent from '../../components/CalendarEvent/CalendarEvent'
import * as eventAPI from "../../services/calendarEvents-api"
import {Container, Grid} from 'semantic-ui-react';
import './Calendar.css'

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
      <Container>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={this.state.events}

      />
      </Container>
      <br/><br/>
      <div id='cs'>
       
      <CalendarEvent
          handleAddCalendarEvent = {this.handleAddCalendarEvent}
          history={this.props.history}
      />
    
      </div>
      </>
    )
  }
}