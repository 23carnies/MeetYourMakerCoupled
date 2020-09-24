import React, { Component } from "react";
import { Card, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class CategoryCard extends Component {
    state = { 
        categories: [
            {
                name: "Home Harvested",
                description: "Garden Items, Honey, Fresh Eggs, and Similar",
                image: "https://i.imgur.com/siPPzTB.jpg"
            },
            {
                name: "Hand Crafted",
                description: "Handmade Jewelry, Clothing, Quilts, and Similar",
                image: "https://i.imgur.com/mZY84AX.jpg?1"
            },   {
                name: "Home Baked",
                description: "Breads, Cakes, Pies, and Similar",
                image: "https://i.imgur.com/f06GW2e.jpg"
            },   {
                name: "Home Preservation",
                description: "Jams, Jellies, Pickles, and Similar",
                image: "https://i.imgur.com/t9QaeeA.jpg"
            },   {
                name: "Home Brewed",
                description: "Kombucha, Vinegars, and Similar",
                image: "https://holfamily.com/wp-content/uploads/2019/09/1.jpg"
            },   {
                name: "Home Built",
                description: "Metalworking, Wood, Glass, Carving, and Similar",
                image: "https://i.imgur.com/JLn5CG1.jpg"
            },
        ]
     }
    render() { 
        return ( 
            <>
            <Container>
                <Card.Group>
                    {this.state.categories.map((category, idx) =>
                <Link
                    to={{
                    pathname: `/category/${idx}`,
                    state: this.state.categories[idx]
                }}
                >
                        <Card
                            key={idx}
                            image={category.image}
                            header={category.name}
                            description={category.description}
                            />
                </Link>
                        )}
                </Card.Group>
            </Container>
            </>
         );
    }
}
 
export default CategoryCard;
//https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg