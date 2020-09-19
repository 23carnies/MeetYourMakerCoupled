import React, { Component } from "react";
import { Card, Container } from 'semantic-ui-react'

class CategoryCard extends Component {
    state = { 
        categories: [
            {
                name: "Category 1",
                description: "I am category 1, I do really cool things",
                image: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"
            },
            {
                name: "Category 2",
                description: "I am category 2, I do really cool things",
                image: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"
            },   {
                name: "Category 3",
                description: "I am category 3, I do really cool things",
                image: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"
            },   {
                name: "Category 4",
                description: "I am category 4, I do really cool things",
                image: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"
            },   {
                name: "Category 5",
                description: "I am category 5, I do really cool things",
                image: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"
            },   {
                name: "Category 6",
                description: "I am category 6, I do really cool things",
                image: "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"
            },
        ]
     }
    render() { 
        return ( 
            <>
            <Container>
                <Card.Group>
                    {this.state.categories.map(category =>
                        <Card
                            image={category.image}
                            header={category.name}
                            description={category.description}
                            />
                        )}
                </Card.Group>
            </Container>
            </>
         );
    }
}
 
export default CategoryCard;
