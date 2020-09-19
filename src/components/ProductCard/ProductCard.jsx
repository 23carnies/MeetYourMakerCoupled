import userEvent from '@testing-library/user-event'
import React from 'react'
import { Card } from 'semantic-ui-react'


const ProductCard = (props) => (
    <Card
      href='#'
      image={product.image}
      name={product.name}
      meta={user.storeLocation}
      description={product.description}
      extra='Product Reviews Link Here'
    />
  )

  export default ProductCard