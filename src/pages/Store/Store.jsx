import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react'
import ProductCard from '../../components/ProductCard/ProductCard'
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
            <h3>{strIdx.storeLocation}</h3>
            <div>{strIdx.bio}</div>
            <div>
                {strIdx.reviews.length ?
                    <div>
                        <h4>Reviews</h4>
                {strIdx.reviews.map(r => 
                    <>
                        <p>{r.name}</p> 
                        <p>{r.rating}</p>           
                        <p>{r.comment}</p>      
                    </>     
                )}
                    </div>
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
