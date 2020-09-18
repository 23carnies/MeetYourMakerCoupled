import React, { Component } from 'react'
import { Form, Menu, MenuItem, MenuMenu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const {user, handleLogout } = this.props

    return (
        <Menu stackable color='blue' inverted>
        {!user ? <>
          <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='sign-up'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          <a href="/signup">Sign Up</a>
        </Menu.Item>

        <Menu.Item
          position='right'
          name='log-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          <a href="/login">Log-in</a>
        </Menu.Item>
        </>
        :
        user.isSeller===false ?
        <>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>
        <Menu.Item>
          What?
        </Menu.Item>
        <Menu.Item
          position='right'
          name='log-out'
          active={activeItem === 'log-out'}
          onClick={this.handleItemClick}
        >
        <Link to='' onClick={handleLogout}>LOG OUT</Link>
        </Menu.Item>
        </>
        :
        <>
        <Menu.Item>
        <img src='/logo.png' />
      </Menu.Item>
      <Menu.Item>
        inbox
      </Menu.Item>    
      <Menu.Item
        position='right'
        name='log-out'
        active={activeItem === 'log-out'}
        onClick={this.handleItemClick}
      >
      <Link to='' onClick={handleLogout}>LOG OUT</Link>
      </Menu.Item>
      </>
     }
     </Menu>  
     )
    }
}