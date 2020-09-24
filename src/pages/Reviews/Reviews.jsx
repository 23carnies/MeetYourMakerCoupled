import React from "react";
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import { Card } from 'semantic-ui-react';

const Reviews = (props) => {
    const strIdx = props.stores[props.match.params.idx]
    console.log(strIdx)
    return ( 
            <div>

                </div>
     );
}
 
export default Reviews;


// {this.strIdx.reviews.length ?
//     <div>
//         <h4>Reviews</h4>
//         <Card.Group>
// {strIdx.reviews.map((review, idx) => 
//     <>
//         <ReviewCard 
//           key={idx}
//           review={review}
//           strIdx={strIdx}
//         />      
//     </>     
// )}
//     </Card.Group>
//     </div>
//     :
//     <p>No reviews yet</p>
// }