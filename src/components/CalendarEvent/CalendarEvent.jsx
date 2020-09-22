import userEvent from '@testing-library/user-event'
import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class CalendarEvent extends Component {
    state = { 
        invalidForm: true,
        formData: {
            name: '',
            date: '',
            description: '',
        }

     }

     handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddCalendarEvent(this.state.formData)
      };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
        })
    }

    formRef = React.createRef();

    render() { 
        return (     
        <>
        <Form id="cf" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>title</label>
                <input placeholder='name of event' />
            </Form.Field>
            <Form.Field>
                <label>date (format: YYYY-MM-DD)</label>
                <input placeholder='date' />
            </Form.Field>
            <Form.Field>
                <label>description</label>
                <input placeholder='info about the event' />
            </Form.Field>
            <Button
            type="submit"
            >Add event</Button>
        </Form> 
        </>
        );
    }
}

  export default CalendarEvent


