import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios'

class EditProduct extends Component {
    state = { 
        invalidForm: false,
        formData: this.props.location.state.product,
        storeId: this.props.location.strIdx.strIdx._id
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
        }).catch(err =>{
            console.log(err);
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateProduct(this.state.formData, this.state.storeId);
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
            <h1>Edit Item</h1>
            {/* Category Input */}
            <Form.Field>
            <label>Category</label>
            <select 
            name="category" 
            value={this.state.formData.category}
            onChange={this.handleChange}>
                <option value="Please Select A Category">Please Select A Category</option>
                <option value="Home Harvested">Home Harvested</option>
                <option value="Hand Crafted">Hand Crafted</option>
                <option value="Home Baked">Home Baked</option>
                <option value="Home Preservation">Home Preservation</option>
                <option value="Home Brewed">Home Brewed</option>
                <option value="Home Built">Home Built</option>
            </select>
          </Form.Field>
            {/* Name Input */}
            <Form.Field>
                <label>Item Name(required)</label>
                <input
                name="name"
                value={this.state.formData.name}
                onChange={this.handleChange}
                required
                />
            </Form.Field>
            {/* Image Input */}
            <Form.Field>
                <label>Item Image(required)</label>
                <input
                name="image"
                value={this.state.formData.image}
                onChange={this.handleChange}
                required
                />
            </Form.Field>
            <Form.Field>
                <input type="file" name="image" onChange={this.handleUploadFile}></input>
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
            color="brown"
            type="submit"
          >
            Submit
          </Button>
        </Form>
         );
    }
}
 
export default EditProduct;
