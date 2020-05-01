import React, { useState, Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


// Search Bar functions


// const [isOpen, setIsOpen] = useState(false);

// const toggle = () => setIsOpen(!isOpen);

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      searchField: ""
    }
  }

  // Search bar functions

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.searchField}`);
  }

  onFieldChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  

  // Navbar Toggler

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
            
              <NavItem>
                <NavLink tag={RRNavLink} to="/popular">Popular</NavLink>
              </NavItem>
  
              <NavItem>
                <NavLink tag={RRNavLink} to="/genres">Genres</NavLink>
              </NavItem>
  
              <NavItem className=".justify-content-end">
                <form className="form-inline" onSubmit={(e) => this.onFormSubmit(e)}>
                  <input value={this.state.searchField} onChange={this.onFieldChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                </form>
              </NavItem>
  
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );

  }
 
}

export default withRouter(Header);