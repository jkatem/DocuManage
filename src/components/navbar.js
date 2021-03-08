
import React from 'react';
// import SearchBar from './SearchBar'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MattersContainer from '../containers/MattersContainer';
import mattersReducer from '../redux/reducers/matterReducer'



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

  state = {
    searchString: '',
    // filteredMatter: []
  }

  handleChange = event => {
    this.setState({
      searchString: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    
  }



    render(){
      console.log(this.state.matters)


      return (
        <>
        <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">DocuManage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Form className="form-center">
            <FormControl 
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              name="search"
              value={this.state.value}
              type="text" 
              placeholder="Search" 
              className="" />
            <Button onsubmit variant="primary" type="submit" >
                Submit
            </Button>      
          </Form>
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
const maptStateToProps = state => {
  return {
    matters: state.matterReducer.matters
  }
}

export default connect(maptStateToProps)(NavBar)
