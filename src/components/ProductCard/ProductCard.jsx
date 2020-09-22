import userEvent from '@testing-library/user-event'
import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'


const ProductCard = (props) => (

    <Card>
      <Image src={props.product.image} />
      <Card.Content>
        <Card.Header>{props.product.name}</Card.Header>
        <Card.Meta>{props.product.maker}</Card.Meta>
        <Card.Meta>{props.storeLocation}</Card.Meta>
        <Card.Description>{props.product.price}</Card.Description>
        <Card.Description>{props.product.category}</Card.Description>
        <Card.Meta>{props.product.countInStock}</Card.Meta>
        <Card.Description>{props.product.description}</Card.Description>
        {props.user._id===props.strIdx.createdBy &&
        <>
            <Button color='orange'>Update Product</Button>
        
            <Button color='red'>Delete Product</Button>
        </>
        }
      </Card.Content>
    </Card>


  ) 

  export default ProductCard


