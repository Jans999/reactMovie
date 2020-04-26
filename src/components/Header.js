import React, { useState } from 'react';
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


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          
            <NavItem>
              <NavLink tag={RRNavLink} to="/popular">Popular</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={RRNavLink} to="/genres">Genres</NavLink>
            </NavItem>

            {/* <NavItem>
              <NavLink tag={RRNavLink} to="/sunshine">Sunshine</NavLink>
            </NavItem> */}

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;