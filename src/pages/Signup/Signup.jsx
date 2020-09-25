import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import {Container} from 'semantic-ui-react'
class Signup extends Component {
  state = {
    message: ''
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <main>
        <Container>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        All fields are required
        <p>{this.state.message}</p>
        </Container>
        <br/><br/>
      </main>
    );
  }
}

export default Signup;