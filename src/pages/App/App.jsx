import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Sellers from "../Sellers/Sellers";
import authService from "../../services/authService";
import "./App.css";
import SellerSetup from '../SellerSetup/SellerSetup'
import * as userAPI from '../../services/userService'
import * as storeAPI from "../../services/store-api"

import CategoryCard from "../../components/CategoryCard/CategoryCard";


class App extends Component {
  state = {
    user: authService.getUser(),
    stores: []
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  
  handleSellerSetup = async newStoreData => {
    const newStore = await storeAPI.create(newStoreData)
    this.setState(state => ({
      stores: [...state.stores, newStore]
    }), () => this. props.history.push('/store')
)}

  async componentDidMount() {
    const users = await userAPI.getAllUsers();
    const stores = await storeAPI.getAll()
    this.setState({users, stores})
  }
    

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome Atlanta to Meet Your Maker!</h1>
              <CategoryCard />
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route 
          exact path="/setup-store"
          render={({history}) => 
            authService.getUser() ?
            <SellerSetup 
              handleSellerSetup = {this.handleSellerSetup}
              user={user}
              history={history}
            />
          :
          <Redirect to ='/login' />
          }/>
        <Route 
          exact path="/sellers"
          render={() =>
              <Sellers 
                stores={this.state.stores}
                user={user}
              />
          }/>
      </>
    );
  }
}
export default App;
