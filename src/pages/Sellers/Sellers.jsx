import React, { Component } from "react";
import { getAllUsers } from "../../services/userService";

class Sellers extends Component {
  state = {
    users: [],
    sellers: []
  };

  async componentDidMount() {
    const users = await getAllUsers();
    this.setState({ users });
  }



  render() {
    return (
      <>
        <h1>Hello. This is a list of all the users.</h1>
        {this.state.users.map((user) => (
              {...user.isSeller===true ? 
                
                <p>{user.store.storeName} </p>
              :
              <p>There are no sellers.</p>
              })
          
        )}
      </>
    );
  }
}

export default Sellers;