import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import { Container, Button, Card } from 'semantic-ui-react'
import ProductCard from '../../components/ProductCard/ProductCard'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import NewProductForm from '../../components/NewProductForm/NewProductForm'
import { Link } from 'react-router-dom';

const Store = (props) => {
    const strIdx = props.stores[props.match.params.idx]
    const index = props.match.params.idx
    
    return ( 
        <>
        {strIdx ?
         <Container>
         {console.log(strIdx.reviews)}
            <div>{<img src={strIdx.storePicture}></img>}</div>
            <h1>{strIdx.storeName}</h1>
            <h3>Location: {strIdx.storeLocation}</h3>
            <div>Bio: {strIdx.bio}</div>
            <div>
                {strIdx.reviews.length ?   
                    <>
                        <p>Average Review:  {(strIdx.reviews.reduce((prev, cur) => 
        ({rating: prev.rating + cur.rating})).rating / strIdx.reviews.length)}  
        <Link
          to={{
            pathname: `/store/${strIdx._id}/reviews`,
            state: {strIdx}
            }}
        >
        View All Reviews</Link></p>
                    </>     
                    :
                    <p>No reviews yet</p>
                }
            <Link
              to={{
                  pathname: `/store/${strIdx._id}/review`,
                  state: {strIdx}
              }}
            >
                <Button color='red'>Review Store</Button>
            </Link>
            </div>
        </Container> 
         :
         <p>Loading...</p>
        }

        <h2>Items for Sale</h2>
        {strIdx ?
        <>
        <div>
            {strIdx.products.map((product, idx) =>
                <Link
                to={{
                    pathname: '/mail',
                    state: {strIdx, product}
                }}
              >
                    <ProductCard 
                        key={idx}
                        product={product}
                        strIdx={strIdx}
                        user={props.user}
                        handleDeleteProduct={props.handleDeleteProduct}
                        handleUpdateProduct={props.handleUpdateProduct}
                        index={index}
                    />    
                </Link>

                
            )}
        </div>
       
        
    {props.user._id===strIdx.createdBy &&
        <>
        <NewProductForm 
            handleAddProduct = {props.handleAddProduct}
            history={props.history}
            index={props.match.params.idx}
            strIdx={strIdx}
            />
            <Link
              to={{
                  pathname: '/store/edit',
                  state: {strIdx},
              }}
            >
                <Button color='orange'>Update Store</Button>
            </Link>
            <Button color='red' onClick={() => props.handleDeleteStore(strIdx._id)}>Delete Store</Button>

        
        </>
        }
        </>

        :
        <p>Loading...</p>
        }

        </>
     );
}
 
export default Store;



// <ReviewCard 
// key={idx}
// review={review}
// strIdx={strIdx}
// />      