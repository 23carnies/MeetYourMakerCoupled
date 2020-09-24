import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const ProductCard = ({product, strIdx, user, handleDeleteProduct, index}) => (
    <Card centered>
      <Image src={product.image} wrapped ui={false} alt="cheese"/>
      <Card.Content>
        <Card.Description>{product.name}</Card.Description>
        <Card.Meta>{strIdx.storeLocation}</Card.Meta>
        <Card.Description>{product.price}</Card.Description>
        <Card.Description>{product.category}</Card.Description>
        <Card.Meta>{product.countInStock}</Card.Meta>
        <Card.Description>{product.description}</Card.Description>
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


