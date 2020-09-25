import React, { Component } from "react";
import './ReviewForm.css'
import { Form, Input, Button, Container } from 'semantic-ui-react'

class ReviewForm extends Component {
    state = { 
        invalidForm: true,
        formData: {
            name: '',
            rating: '',
            comment: ''
        },
        storeId: this.props.location.state.strIdx._id
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleReviewForm(this.state.formData, this.state.storeId);
        this.props.history.push(`/store/${this.props.index}`)
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
                <Container>
                <br/><br/><br/><br/>
                <Form id="cf" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                <h1>Add Item</h1>
                {/* Category Input */}
                <Form.Field>
                <label>Rating</label>
                <select 
                name="rating" 
                value={this.state.formData.rating}
                onChange={this.handleChange}>
                    <option value="please select a rating">Please Select A Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
              </Form.Field>
                {/* Name Input */}
                <Form.Field>
                    <label>Name(required)</label>
                    <input
                    name="name"
                    value={this.state.formData.name}
                    onChange={this.handleChange}
                    required
                    />
                </Form.Field>
                {/* Comment Input */}
                <Form.Field>
                    <label>Comment(required)</label>
                    <textarea
                    name="comment"
                    value={this.state.formData.comment}
                    onChange={this.handleChange}
                    required
                    />
                </Form.Field>
                <Button
                type="submit"
              >
                Submit
              </Button>
            </Form>
            </Container>
            </>
             );
        }
    }


export default ReviewForm;

