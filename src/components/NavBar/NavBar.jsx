import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './NavBar.css'


export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const {user, handleLogout } = this.props

    return (
        <Menu stackable id="nav">
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
        <Menu.Item>
                <a href="https://twitter.com/TeamMYMAtl"><Icon name="twitter square" size="large" id="twitter" /></a>
            </Menu.Item>
        </>
        :
        //These links are for Users that are not Sellers------------
        user.isSeller===false ?
        <>
      <Menu.Item>
        <img src='/logo.png' />
      </Menu.Item>
      <Menu.Item id="welc">
        Welcome {user.name}!
      </Menu.Item>


        {/* Nav link to Seller */}
        <Menu.Item className="nav-item"
        name='sellers'
        active={activeItem === 'sellers'}
        onClick={this.handleItemClick}
      >
        <Link to='/sellers'  className="nav-item">Makers</Link>
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
      <Menu.Item id="welcome">
        Welcome {user.name}!
      </Menu.Item>

    {/* Nav link to SellerSetup form */}
    <Menu.Item
        name='setup-store'
        active={activeItem === 'setup-store'}
        onClick={this.handleItemClick}
      >
        <Link to='/setup-store'  className="nav-item">Setup Store</Link>
        
      </Menu.Item>
    
            {/* Nav link to Seller */}
            <Menu.Item className="nav-item"
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
        <Menu.Item id="back1" >
        Welcome back {user.name}!
      </Menu.Item>
      {/* Nav link to Inbox  */}

          
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