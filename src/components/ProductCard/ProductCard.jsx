import userEvent from '@testing-library/user-event'
import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


const ProductCard = ({product, strIdx, user}) => (

    <Card>
      <Image src={product.image} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{product.name}</Card.Description>
        <Card.Meta>{strIdx.storeLocation}</Card.Meta>
        <Card.Description>{product.price}</Card.Description>
        <Card.Description>{product.category}</Card.Description>
        <Card.Meta>{product.countInStock}</Card.Meta>
        <Card.Description>{product.description}</Card.Description>
        {user._id===strIdx.createdBy &&
        <>
            <Link 
              to={{
              pathname: '/product/edit',
              state: {product},
              strIdx: {strIdx},
              }}
            >
            <Button color='orange'>Update Product</Button>
            </Link>
            
            <Button color='red'>Delete Product</Button>
        </>
        }
      </Card.Content>
    </Card>


  ) 

  export default ProductCard


