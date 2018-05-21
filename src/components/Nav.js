import React, { Component } from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';


const NavLabel = styled.label`
  font-family: Helvetica-Light !important;
  font-size: 14px !important;
  color: white !important;
  padding-right: 20px !important;
  padding-left: 20px !important;

`

class Nav extends Component {
  render(){
    return(
      <Menu inverted>
        <Menu.Item>
            <NavLabel> MY-DEAR-WATSON </NavLabel>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav
