import React from "react";
import SellerCard from "../../components/SellerCard/SellerCard"
import { Card, Container } from 'semantic-ui-react';
import './Sellers.css'

const Sellers = (props) => {
  return ( 
    <>
      {props.stores ?
        <Container>
        <h1 id="c">All Stores</h1>
          <Card.Group itemsPerRow={4}>
            {props.stores.map((store, idx) =>
              <SellerCard 
                idx={idx}
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