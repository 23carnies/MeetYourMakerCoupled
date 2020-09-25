import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';


class Nodemailer extends Component {
    state = { 
        invalidForm: true,
        formData: {
            name: '',
            subject: '',
            message: '',
            email: 'meetyourmaker727@gmail.com'
        }
    } 

    formRef = React.createRef();

    handleSubmit = e => {
       e.preventDefault();
       this.props.handleNodemailer(this.state.formData);
       this.props.history.push('/sellers')
     };

    handleChange = e => {
      const formData = {...this.state.formData, [e.target.name]: e.target.value};
       this.setState({
         formData,
       });
     };

    render() { 
        return ( 
          <>
          <br/> <br/> <br/> <br/> 
          <div id="fc">
          <Container>
            <Form id="cf" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <h1>Email Seller</h1>

            {/* Name Input */}
            <Form.Field>
                <label>Buyer Name(required)</label>
                <input
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
                />
            </Form.Field>

            {/* Subject Input */}
            <Form.Field>
                <label>Subject(required)</label>
                <input
                name="subject"
                value={this.state.formData.subject}
                onChange={this.handleChange}
                required
                />
            </Form.Field>

            {/* Message Input */}
            <Form.Field>
                <label>Message(required)</label>
                <input
                name="message"
                value={this.state.formData.message}
                onChange={this.handleChange}
                required
                />
            </Form.Field>

            <Button
            color="brown"
            type="submit"
          >
            Submit
          </Button>
        </Form>
        </Container>
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
        </>
         );
    }
}
 
export default Nodemailer;