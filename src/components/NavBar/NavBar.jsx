import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
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
        {/* These links are for visitors not logged in/signed up */}
          <Menu.Item>
          <img src='/logo.png' alt="logo"/>
        </Menu.Item>

        <Menu.Item
          position='right'
          name='sign-up'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          <a href="/signup">Sign Up</a>
        </Menu.Item>

        <Menu.Item
          name='log-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          <a href="/login">Log-in</a>
        </Menu.Item>
        </>
        :
        //These links are for Users that are not Sellers------------
        user.isSeller===false ?
        <>
      <Menu.Item>
        <img src='/logo.png' />
      </Menu.Item>
      <Menu.Item>
        Welcome {user.name}!
      </Menu.Item>


        {/* Nav link to Seller */}
        <Menu.Item
        name='sellers'
        active={activeItem === 'sellers'}
        onClick={this.handleItemClick}
      >
        <Link to='/sellers' >Makers</Link>
        </Menu.Item>
              {/* Nav link to Calendar form */}
      <Menu.Item
        name='calendar'
        active={activeItem === 'calendar'}
        onClick={this.handleItemClick}
      >
        <Link to='/calendar' >Events</Link>        
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
        : user.store.length === 0 ?
        // These Links Are for Sellers Without a store -------
        <>
        <Menu.Item>
        <img src='/logo.png' />
      </Menu.Item>
      <Menu.Item>
        Welcome {user.name}!
      </Menu.Item>

    {/* Nav link to SellerSetup form */}
    <Menu.Item
        name='setup-store'
        active={activeItem === 'setup-store'}
        onClick={this.handleItemClick}
      >
        <Link to='/setup-store' >Setup Store</Link>
        
      </Menu.Item>
     
            {/* Nav link to Seller */}
            <Menu.Item
        name='sellers'
        active={activeItem === 'sellers'}
        onClick={this.handleItemClick}
      >
        <Link to='/sellers' >Makers</Link>
        </Menu.Item>
              {/* Nav link to Calendar form */}
      <Menu.Item
        name='calendar'
        active={activeItem === 'calendar'}
        onClick={this.handleItemClick}
      >
        <Link to='/calendar' >Events</Link>        
      </Menu.Item>


      
          {/* Log out */}
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
        <Menu.Item >
        <img src='/logo.png' />
        </Menu.Item>
        <Menu.Item>
        Welcome back {user.name}!
      </Menu.Item>
      {/* Nav link to Inbox  */}
      <Menu.Item
      id="navitem"
      name='inbox'
      active={activeItem === 'inbox'}
      onClick={this.handleItemClick}
      >        
        Inbox
      </Menu.Item> 
          
          {/* Nav link to Seller */}
          <Menu.Item
      name='sellers'
      active={activeItem === 'sellers'}
      onClick={this.handleItemClick}
    >
      <Link to='/sellers' >Makers</Link>
      </Menu.Item>
            {/* Nav link to Calendar form */}
    <Menu.Item
      name='calendar'
      active={activeItem === 'calendar'}
      onClick={this.handleItemClick}
    >
      <Link to='/calendar' >Events</Link>        
    </Menu.Item>

          {/* Log out */}
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