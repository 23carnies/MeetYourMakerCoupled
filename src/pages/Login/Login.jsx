import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { Form, Image, Container, Button, Card } from 'semantic-ui-react'
import './login.css'

class Login extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <>
      <br/><br/><br/>
      <Container id="mess">
        <br/><br/>
        <Card fluid id="lc">
          <Image id="logLogo" src="images/logoWhiteBkgr.jpg" />
          <br/><br/>
          <Card.Header id="hdf">Log In</Card.Header><br/>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <br/> 
            <Form.Field>
            <input
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
            </Form.Field>
            <br/>
            <Form.Field>
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={pw}
              name="pw"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            </Form.Field> <br/> 
            <Button color="brown">Log In</Button>&nbsp;&nbsp;&nbsp;
            <Link className="btn red" to="/signup">
              <Button color="basic brown">Signup</Button>
            </Link>
            <br/> <br/>
          </Form>
        </Card>
      </Container>
      <br/> <br/> <br/> <br/> 
      </>
    );
  }
}

export default Login;