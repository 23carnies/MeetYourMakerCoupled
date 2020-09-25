import React from 'react';
import { Container, Button, Card } from 'semantic-ui-react'
import ProductCard from '../../components/ProductCard/ProductCard'
import NewProductForm from '../../components/NewProductForm/NewProductForm'
import { Link } from 'react-router-dom';
import './Store.css'

const Store = (props) => {
    const strIdx = props.stores[props.match.params.idx]
    const index = props.match.params.idx
    console.log(props.stores)
    
    return ( 
        <>
        {strIdx ?
         <Container id='sc'>
         {console.log(strIdx.reviews)}
            <div>{<img id="strimg"src={strIdx.storePicture}></img>}</div>
            <h1>{strIdx.storeName}</h1>
            <h3>Location: {strIdx.storeLocation}</h3>
            <div>Bio: {strIdx.bio}</div>

                {strIdx.reviews.length ?   
                    <>
                        <p>Average Review:  {(strIdx.reviews.reduce((prev, cur) => 
        ({rating: prev.rating + cur.rating})).rating / strIdx.reviews.length)}</p>  
        <br/> <Link id="a"
          to={{
            pathname: `/store/${strIdx._id}/reviews`,
            state: {strIdx}
            }}
        >
        <p>View All Reviews</p></Link>
                    </>     
                    :
                    <p>No reviews yet</p>
                }
                <>
            
            {props.user._id !== strIdx.createdBy ?
            
            <Link 
              to={{
                  pathname: `/store/${strIdx._id}/review`,
                  state: {strIdx}
              }}
            >

                <Button color='red'>Review Store</Button>
            </Link>
            
            :
            <>
            </>
            }     
            </>      

        </Container> 
         :
         <p>Loading...</p>
        }
        <br/> <br/>
        <h2>Items for Sale</h2>
        {strIdx ?
        <>
        <div>
            <Container>
            <Card.Group>
            {strIdx.products.map((product, idx) =>

                    <ProductCard 
                        key={idx}
                        product={product}
                        strIdx={strIdx}
                        user={props.user}
                        handleDeleteProduct={props.handleDeleteProduct}
                        handleUpdateProduct={props.handleUpdateProduct}
                        index={index}
                    />    
            )}
            </Card.Group>
            </Container>
        </div>
       
    {props.user._id===strIdx.createdBy &&
        <>
            <div id="pc">
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
                    <Button color="brown" className="but"  >Update Store</Button>
                </Link> 
                
                <Button className="but" color='red' onClick={() => props.handleDeleteStore(strIdx._id)}>Delete Store</Button>
       
            </div>        
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

