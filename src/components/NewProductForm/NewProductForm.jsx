import React, { Component, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { preventDefault } from '@fullcalendar/react';


class NewProductForm extends Component {
    state = { 
        invalidForm: true,
        formData: {
            category: '',
            name: '',
            image: '',
            price: '',
            countInStock: '',
            description: ''
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
            const formData = {...this.state.formData, image: imgUrl}
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
        this.props.handleAddProduct(this.state.formData);
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
            <Form id="cf" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
            <h1>Add Item</h1>
            {/* Category Input */}
            <Form.Field>
            <label>Category</label>
            <select 
            name="category" 
            value={this.state.formData.category}
            onChange={this.handleChange}>
                <option value="please select a category">Please Select A Category</option>
                <option value="cat1">1</option>
                <option value="cat2">2</option>
                <option value="cat3">3</option>
                <option value="cat4">4</option>
                <option value="cat5">5</option>
                <option value="cat6">6</option>
            </select>
          </Form.Field>
            {/* Name Input */}
            <Form.Field>
                <label>Item Name(required)</label>
                <input
                name="name"
                value={this.state.formData.productName}
                onChange={this.handleChange}
                required
                />
            </Form.Field>
            {/* Image Input */}
            <Form.Field>
                <label>Item Image(image link, required)</label>
                <input
                name="image"
                value={this.state.formData.productImage}
                onChange={this.handleChange}
                required
                />
                </Form.Field>
                <Form.Field>
                <input type="file" name="image" onChange={this.handleUploadFile}></input>
                {/* {uploading && <div>Uploading...</div>} */}
            </Form.Field>
            {/* Price Input */}
            <Form.Field>
                <label>Price(required)</label>
                <input type="text" pattern="[0-9]*"
                name="price"
                value={this.state.formData.price}
                onChange={this.handleChange}
                required
                />
            </Form.Field>
            {/* CountInStock Input */}
            <Form.Field>
                <label>Number In Stock(required)</label>
                <input type="text" pattern="[0-9]*"
                name="countInStock"
                value={this.state.formData.countInStock}
                onChange={this.handleChange}
                required
                />
            </Form.Field>
            {/* Description Input */}
            <Form.Field>
                <label>Description(required)</label>
                <textarea
                name="description"
                value={this.state.formData.description}
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
         );
    }
}
 
export default NewProductForm;
