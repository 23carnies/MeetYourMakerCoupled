import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class CalendarEvent extends Component {
    state = { 
        invalidForm: true,
        formData: {
            title: '',
            date: ''
        }
     }

     handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddCalendarEvent(this.state.formData);
        this.setState(       {formData: {
            title: '',
            date: ''
        }
    })
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
                <label>Event name - location</label>
                <input placeholder='Event name - Description'
                    name="title" 
                    value={this.state.formData.title}
                    onChange={this.handleChange}
                    required/>
            </Form.Field>
            <Form.Field>
                <label>date (format: YYYY-MM-DD)</label>
                <input placeholder='date'
                    name="date"
                    value={this.state.formData.date}
                    onChange={this.handleChange}
                    required
                />
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


