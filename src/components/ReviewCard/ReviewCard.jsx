import React from 'react'
import { Card } from 'semantic-ui-react';

const ReviewCard = ({strIdx}) => {
    return ( 
        <Card
            header={strIdx.reviews.rating}
            meta={strIdx.reviews.name}
            description={strIdx.reviews.comment}
        />
     );
}
 
export default ReviewCard;