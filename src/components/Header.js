import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav, NavDropdown} from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    console.log(props)

  }

    render() {
        return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Flat-Finder</Link>
          </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
  <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Immobilien" id="nav-real-estates">
            <LinkContainer to="/new">
              <NavItem>Neue</NavItem>
            </LinkContainer>
            <LinkContainer to="/favorites">
              <NavItem>Favoriten</NavItem>
            </LinkContainer>
            <LinkContainer to="/archive">
              <NavItem>Archiv</NavItem>
            </LinkContainer>
            </NavDropdown>   
            <LinkContainer to="/settings">
              <NavItem>Sucheinstellungen</NavItem>
            </LinkContainer>
            <LinkContainer to="/process">
              <NavItem>Suchdurchläufe</NavItem>
            </LinkContainer>       
        </Nav>
  </Navbar.Collapse>
      </Navbar>
        );
    }
}

export { Header };
