import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './ProductCard.css'


const ProductCard = ({product, strIdx, user, handleDeleteProduct, index}) => (
    <Card centered id="cc">
      <Image src={product.image} wrapped ui={false} alt="cheese"/>
      <Card.Content>
        <Card.Description>Product: {product.name}</Card.Description>
        <Card.Meta>Location: {strIdx.storeLocation}</Card.Meta>
        <Card.Description>Price: {product.price}</Card.Description>
        <Card.Description>Category: {product.category}</Card.Description>
        <Card.Meta>Number Available: {product.countInStock}</Card.Meta>
        <Card.Description>Description: {product.description}</Card.Description>
        <Link
to={{
    pathname: '/mail',
    state: {strIdx, product}
}}
> 
        <Button>Contact Seller about this product</Button> </Link>
        {user._id===strIdx.createdBy &&
        <>
            <Link 
              to={{
              pathname: '/product/edit',
              state: {product},
              strIdx: {strIdx},
              index: {index}
              }}
            >
            <Button color='orange'>Update Product</Button>
            </Link>
            
            <Button color='red' onClick={() => handleDeleteProduct(product._id, strIdx._id, index)}>Delete Product</Button>
        </>
        }
      </Card.Content>
    </Card>            
  ) 

  export default ProductCard


