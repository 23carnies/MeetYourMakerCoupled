import userEvent from '@testing-library/user-event'
import React from 'react'
import { Card } from 'semantic-ui-react'


const SellerCard = (props) => (
    <Card
      image={user.storePicture}
      header={user.storeName}
      meta={user.storeLocation}
      description={user.bio}
      extra='Seller Reviews Link Here'
    />
  )

  export default SellerCard
