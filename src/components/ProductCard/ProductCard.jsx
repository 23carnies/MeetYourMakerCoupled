import userEvent from '@testing-library/user-event'
import React from 'react'
import { Card } from 'semantic-ui-react'


const ProductCard = (props) => (

    <Card
      href='#'
      header={props.product.name}
      image={props.product.image}
      meta={props.product.maker}
      meta={props.storeLocation}
      description={props.product.price}
      description={props.product.category}
      extra={props.product.countInStock}
      description={props.product.description}
    />
  ) 

  export default ProductCard


