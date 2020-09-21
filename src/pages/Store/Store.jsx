import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react'
import ProductCard from '../../components/ProductCard/ProductCard'
import NewProductForm from '../../components/NewProductForm/NewProductForm'

const Store = (props) => {
    const strIdx = props.stores[props.match.params.idx]

    return ( 
        <>
        {strIdx ?
         <Container>
            <div>{<img src={strIdx.storePicture}></img>}</div>
            <h1>{strIdx.storeName}</h1>
            <h3>{strIdx.storeLocation}</h3>
            <div>{strIdx.bio}</div>
            <div><p>Reviews will go here</p></div>
        </Container> 
         :
         <p>Loading...</p>
        }

        <h2>Items for Sale</h2>
        {strIdx ?
        <div>
            {strIdx.products.map((product, idx) =>
                <ProductCard 
                    key={idx}
                    product={product}

                />    
            )}
        </div>
        :
        <p>Loading...</p>
        }


        {/* New Product Form Here */}
        <NewProductForm 
            handleAddProduct = {props.handleAddProduct}
            history={props.history}
            index={props.match.params.idx}
        />
        {/* Edit button for store down here */}
        </>
     );
}
 
export default Store;







