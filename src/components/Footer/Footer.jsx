import React from 'react'
import { Menu, Icon, Sticky } from 'semantic-ui-react'
import './Footer.css'

const Footer = () => {
    return ( 
        <Menu id="nav">
            <Menu.Item>
                <a href="https://twitter.com/TeamMYMAtl"><Icon name="twitter square" size="large" id="twitter" /></a>
            </Menu.Item>

            <Menu.Item>
                <Icon name="copyright outline" id="copy" />
                <p id="foot">The Epic Objective 2020</p>
            </Menu.Item>
        </Menu>
     );
}
 
export default Footer;