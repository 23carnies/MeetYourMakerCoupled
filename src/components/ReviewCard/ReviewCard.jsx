import React from 'react'
import { Divider } from 'semantic-ui-react';

const ReviewCard = ({review}) => {
    return ( 
        <>
        <Divider />
        <h3>Review Score: {review.rating}</h3>
        <h5>Reviewed by: {review.name}</h5>
        <h5>Comments: {review.comment}</h5>
        <Divider />
        </>
     );
}
 
export default ReviewCard;