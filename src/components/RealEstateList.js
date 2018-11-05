import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav, NavDropdown} from 'react-bootstrap';

class RealEstateList extends Component {

  constructor(props) {
    super(props);

    switch (props.location.pathname) {
        case "/favorites":  console.log("favorites");
                            break;
        case "/archive":    console.log("archive");
                            break;
        default:            console.log("new");

    }
    console.log(props)

  }

    render() {
        return (<div/>
        );
    }
}

export { RealEstateList };
