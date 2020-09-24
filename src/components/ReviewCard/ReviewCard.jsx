import React from 'react'
import { Card } from 'semantic-ui-react';

const ReviewCard = ({review}) => {
    return ( 
        <Card
        header={review.rating}
        meta={review.name}
        description={review.comment}
        />
     );
}
 
export default ReviewCard;