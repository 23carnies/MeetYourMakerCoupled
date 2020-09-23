import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'

class SellerSetup extends Component {
    state = { 
        invalidForm: true,
        formData: {
            storeName: '',
            storePicture: '',
            storeLocation: '',
            bio: ''
        }
     } 

     handleUploadFile = e => {
      e.preventDefault()
      console.log(e)
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append('image', file);
      axios.post("/api/upload/image-upload", bodyFormData, {
          headers:{
          'Content-Type': 'multipart/form-data'
          }
      }).then(response => {
          console.log(response);
          const imgUrl = response.data.imageUrl
          console.log(imgUrl)
          const formData = {...this.state.formData, storePicture: imgUrl}
          this.setState({
              formData,
          })
          // setImage(response.data);
          // setUploading(false);
      }).catch(err =>{
          console.log(err);
          // setUploading(false);
      });
  }

    handleSubmit = e => {
       e.preventDefault();
       this.props.handleSellerSetup(this.state.formData);
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
        <Form id="cf" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <h1>Store Setup</h1>
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
            <Form.Field>
                <input type="file" name="storePicture" onChange={this.handleUploadFile}></input>
                {/* {uploading && <div>Uploading...</div>} */}
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
          >
            Start Selling
          </Button>
        </Form>
        </>
         );
    }
}
 
export default SellerSetup;