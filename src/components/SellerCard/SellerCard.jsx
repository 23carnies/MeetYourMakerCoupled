import userEvent from '@testing-library/user-event'
import React from 'react'
import { Card } from 'semantic-ui-react'


const SellerCard = ({store, idx}) => (
    <Card
      href={`/store/${idx}`}
      image={store.storePicture}
      header={store.storeName}
      meta={store.storeLocation}
      description={store.bio}
      extra='Seller Reviews Link Here'
    />
  )

  export default SellerCard
