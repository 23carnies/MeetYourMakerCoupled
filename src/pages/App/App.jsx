import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Sellers from "../Sellers/Sellers";
import SellerSetup from "../SellerSetup/SellerSetup";
import Store from "../Store/Store";
import Calendar from "../Calendar/Calendar";
import "./App.css";
import authService from "../../services/authService";
import * as userAPI from "../../services/userService";
import * as storeAPI from "../../services/store-api";
import * as productAPI from "../../services/product-api";
import * as eventAPI from "../../services/calendarEvents-api";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import EditProduct from "../EditProduct/EditProduct";
import EditStore from "../EditStore/EditStore";
import Review from "../../components/ReviewForm/ReviewForm"

class App extends Component {
  state = {
    user: authService.getUser(),
    stores: [],
    products: [],
    events: [],
    users: [],
    reviews: []
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleSellerSetup = async (newStoreData) => {
    const newStore = await storeAPI.create(newStoreData);
    console.log(newStore)
    this.setState(
      {stores: [...this.state.stores, newStore]},
      () => this.props.history.push("/sellers")
    );
  };

  handleAddProduct = async (newProductData) => {
    const newProduct = await productAPI.create(newProductData);
    this.setState(
      (state) => ({
        products: [...this.state.products, newProduct],
        user: authService.getUser(),
      }),
      () => this.props.history.push("/sellers")
    );
  };

  handleAddCalendarEvent = async (newEventData) => {
    const newEvent = await eventAPI.create(newEventData);
    this.setState(
      (state) => ({
        events: [...state.events, newEvent],
        user: authService.getUser(),
      }),
      () => this.props.history.push("/calendar")
    );
  };

  handleUpdateProduct = async (updatedProductData) => {
    console.log(updatedProductData)
    const updatedProduct = await productAPI.update(updatedProductData);
    const newProductsArray = this.state.products.map((p) =>
      p._id === updatedProduct._id ? updatedProduct : p
    );
    this.setState({ products: newProductsArray }, () =>
      this.props.history.push("/sellers")
    );
  };

  handleUpdateStore = async (updatedStoreData) => {
    const updatedStore = await storeAPI.update(updatedStoreData);
    const newStoresArray = this.state.stores.map((s) =>
      s._id === updatedStore._id ? updatedStore : s
    );
    this.setState({ stores: newStoresArray }, () =>
      this.props.history.push("/sellers")
    );
  };

  handleDeleteStore = async (id) => {
    if (authService.getUser()) {
      await storeAPI.deleteOne(id);
      this.setState(
        (state) => ({
          stores: state.stores.filter(s => s._id !== id),
        }),
        () => this.props.history.push("/sellers")
      );
    } else {
      this.props.history.push("/login");
    }
  };

  handleDeleteProduct = async (p_id, s_id, index) => {
    if (authService.getUser()) {
      let newStore = await productAPI.deleteOne(p_id, s_id);
      let newStoreArray = this.state.stores.map(s => s._id === newStore._id ?
        newStore : s )
      this.setState(
       {stores: newStoreArray},
        () => this.props.history.push(`/store/${index}`)
      );
    } else {
      this.props.history.push("/login");
    }
  };

  async componentDidMount() {
    const users = await userAPI.getAllUsers();
    const stores = await storeAPI.getAll();
    this.setState({ users, stores });
  }

  render() {
    const { user } = this.state;
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
        {/* Seller Store Setup */}
        <Route
          exact
          path="/setup-store"
          render={({ history }) =>
            authService.getUser() ? (
              <SellerSetup
                handleSellerSetup={this.handleSellerSetup}
                user={user}
                history={history}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        {/* All Sellers List */}
        <Route
          exact
          path="/sellers"
          render={() => 
            <Sellers 
            stores={this.state.stores} 
            user={user} />}
          />
        {/* Calendar */}
        <Route
          exact
          path="/calendar"
          render={(history) => (
            <Calendar
              history={history}
              handleAddCalendarEvent={this.handleAddCalendarEvent}
              user={user}
            />
          )}
        />
        {/* Store */}
        <Route
          exact
          path="/store/:idx"
          render={({ match, history, location }) =>
            authService.getUser() ? (
              <>
                <Store
                  location={location}
                  history={history}
                  match={match}
                  handleAddProduct={this.handleAddProduct}
                  handleUpdateProduct={this.handleUpdateProduct}
                  handleDeleteProduct={this.handleDeleteProduct}
                  handleUpdateStore={this.handleUpdateStore}
                  handleDeleteStore={this.handleDeleteStore}
                  user={user}
                  stores={this.state.stores}
                /> 
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
                {/* Review */}
                <Route
          exact
          path="/store/:idx/review"
          render={({ match, history, location }) =>
            authService.getUser() ? (
              <>
                <Review
                  location={location}
                  history={history}
                  match={match}
                  user={user}
                  stores={this.state.stores}
                /> 
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        {/* Product Update */}
        <Route
          exact
          path="/product/edit"
          render={({ location }) =>
            authService.getUser() ? (
              <EditProduct
                handleUpdateProduct={this.handleUpdateProduct}
                location={location}
                user={user}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        {/* Store Update */}
        <Route
          exact
          path="/store/edit"
          render={({ location }) =>
            authService.getUser() ? (
              <EditStore
                handleUpdateStore={this.handleUpdateStore}
                location={location}
                user={user}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </>
    );
  }
}
export default App;
