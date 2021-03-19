
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: lightblue; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

class NavBar extends React.Component  {

    render(){     
      
      return (

        <>
        <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">DocuManage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          
           <div className="ui inverted item">
            <div className="ui fluid category search">
            </div>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/matters/new">Create New Matter</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
      </>
      )
    }
}


export default (NavBar)
