import userEvent from '@testing-library/user-event'
import React from 'react'
import { Card } from 'semantic-ui-react'


const ProductCard = (props) => (
    <Card
      header={product.name}
      image={product.image}
      meta={product.maker}
      description={product.price}
      description={product.category}
      extra={product.countInStock}
      description={product.description}
    />
  )

  export default ProductCard

