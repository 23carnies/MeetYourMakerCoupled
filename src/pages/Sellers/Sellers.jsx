import React, { Component } from "react";
import SellerCard from "../../components/SellerCard/SellerCard"
import { Card, Container } from 'semantic-ui-react';


const Sellers = (props) => {
  return ( 
    <>
      <h1>All Stores</h1>
      {props.stores ?
        <Container>
          <Card.Group itemsPerRow={4}>
            {props.stores.map(store =>
              <SellerCard 
                key={store._id}
                store={store}
                user={props.user}
              />)}
          </Card.Group>
        </Container>
        :
        <p>Loading...</p>
      }
    </>
   );
}
 
export default Sellers;