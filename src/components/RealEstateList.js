import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, Nav, NavDropdown} from 'react-bootstrap';
import {RealEstateListView} from "../entities/RealEstateListView";

class RealEstateList extends Component {

    constructor(props) {
        super(props);

        console.log(process.env.REACT_APP_BACKEND_URL);
        console.log(props.view);

        switch (props.view) {
            case RealEstateListView.NEW :
                console.log("new");
                break;
            case RealEstateListView.FAVORITE :
                console.log("favorites");
                break;
            case RealEstateListView.ARCHIVE :
                console.log("archive");
                break;
        }

    }

    render() {
        return (<div/>
        );
    }
}

export {RealEstateList};
