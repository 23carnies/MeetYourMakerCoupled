import React from "react";
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import { Card, Container, Message } from 'semantic-ui-react';

const Reviews = (props) => {
    const newStore = props.stores.filter((store) => store._id === props.match.params.idx)
    const store = newStore[0]
    console.log(store)
    return ( 
        <>
        {store && (
            <div>
                <Container>
                    <Message>
            {store.reviews.length ?
                <div>
                    <h2>Reviews for {store.storeName}</h2>
            {store.reviews.map((review, idx) => 
                <>
                    <ReviewCard 
                      key={idx}
                      review={review}
                      store={store}
                    />      
                </>     
            )}
                </div>
                :
                <p>No reviews yet</p>
            }
            </Message>
            </Container>
                </div>

        )}
        </>
     );
}
 
export default Reviews;


