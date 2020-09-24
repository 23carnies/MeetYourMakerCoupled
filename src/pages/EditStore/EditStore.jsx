import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class EditStore extends Component {
    state = { 
        invalidForm: false,
        formData: this.props.location.state.strIdx
    } 

    formRef = React.createRef();

    handleSubmit = e => {
       e.preventDefault();
       this.props.handleUpdateStore(this.state.formData);
       //this.props.history
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
        <Form id="cf" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <h1>Edit Store</h1>
        {/* Name Input */}
          <Form.Field>
            <label>Store Name(required)</label>
            <input
              name="storeName"
              value={this.state.formData.storeName}
              onChange={this.handleChange}
              required
            />
          </Form.Field>
        {/* Store Picture Input */}
          <Form.Field>
            <label>Store Cover(image link, required)</label>
            <input
              name="storePicture"
              value={this.state.formData.storePicture}
              onChange={this.handleChange}
              required
            />
            </Form.Field>
        {/* Location Input */}
            <Form.Field>
            <label>Store City/Neighborhood(required)</label>
            <input
              name="storeLocation"
              value={this.state.formData.storeLocation}
              onChange={this.handleChange}
              required
            />
            </Form.Field>
        {/* Bio Input */}
          <Form.Field>
            <label>Bio</label>
            <input
              name="bio"
              value={this.state.formData.bio}
              onChange={this.handleChange}
              required
            />
            </Form.Field>
          <Button
            type="submit"
            disabled={this.state.invalidForm}
          >
            Save Store
          </Button>
        </Form>
        </>
         );
    }
}
 
export default EditStore;
