import React, {Component} from 'react';
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {RealEstateListView} from "../entities/RealEstateListView";

function titleFormatter(cell, row) {
    return (
        <a href={row.url} target="_blank">{cell}</a>
    );
}

function booleanFormatter(cell, row) {
    let className = "";

    if (cell) {
        className = "glyphicon glyphicon-ok";
    }

    return (
        <i className={className} />
    );
}

function stateFormatter(cell, row, index, reference) {
    let savedClassName = "glyphicon glyphicon-floppy-disk";
    let favoriteClassName = "glyphicon glyphicon-star";
    let trashClassName = "glyphicon glyphicon-trash";

    if (cell === "SAVED") {
        return (
            <span style={{fontSize: 20}}>
                <i className={favoriteClassName} style={{ marginLeft:20, marginRight:20, cursor:"pointer" }}
                   onClick={reference.handleStateChange.bind(reference, row.id, RealEstateListView.FAVORITE)}/>
                <i className={trashClassName} style={{ cursor:"pointer" }}
                   onClick={reference.handleStateChange.bind(reference, row.id, RealEstateListView.ARCHIVED)}/>
            </span>
        );
    } else if (cell === "FAVORITE") {
        return (
            <span style={{fontSize: 20}}>
                <i className={savedClassName} style={{ marginLeft:20, marginRight:20, cursor:"pointer" }}
                   onClick={reference.handleStateChange.bind(reference, row.id, RealEstateListView.SAVED)}/>
                <i className={trashClassName} style={{ cursor:"pointer" }}
                   onClick={reference.handleStateChange.bind(reference, row.id, RealEstateListView.ARCHIVED)}/>
            </span>
        );
    } else if (cell === "ARCHIVED") {
        return (
            <span style={{fontSize: 20}}>
                <i className={savedClassName} style={{ marginLeft:20, marginRight:20, cursor:"pointer" }}
                   onClick={reference.handleStateChange.bind(reference, row.id, RealEstateListView.SAVED)}/>
                <i className={favoriteClassName} style={{ cursor:"pointer" }}
                   onClick={reference.handleStateChange.bind(reference, row.id, RealEstateListView.FAVORITE)}/>
            </span>
        );
    }
}

class RealEstateList extends Component {

    state = {
        realEstates: []
    };

    columns = [{
        dataField: 'state',
        text: 'Aktionen',
        formatter: stateFormatter,
        formatExtraData: this,
        headerStyle: { width: '100px' }
    }, {
        dataField: 'id',
        text: 'ID',
        hidden: true
    }, {
        dataField: 'title',
        text: 'Titel',
        formatter: titleFormatter
    }, {
        dataField: 'city',
        text: 'Ort'
    }, {
        dataField: 'postalCode',
        text: 'Postleitzahl',
        headerStyle: { width: '100px' }
    }, {
        dataField: 'price',
        text: 'Preis',
        headerStyle: { width: '100px' }
    }, {
        dataField: 'rooms',
        text: 'Zimmer',
        headerStyle: { width: '100px' }
    }, {
        dataField: 'squareMetres',
        text: 'm²',
        headerStyle: { width: '100px' }
    }, {
        dataField: 'project',
        text: 'Project?',
        headerStyle: { width: '100px' },
        formatter: booleanFormatter
    }, {
        dataField: 'website',
        text: 'Quelle'
    }];

    componentDidMount() {
        this.loadRealEstates();
    }


    applyFilter(realEstates){
        let type = this.typeSelector.value;
        let purchaseType = this.purchaseTypeSelector.value;

        let filteredRealEstates = Array.from(realEstates);

        if (type !== "both") {
            filteredRealEstates = filteredRealEstates.filter(realEstate => realEstate.type === type);
        }

        if (purchaseType !== "both") {
            filteredRealEstates = filteredRealEstates.filter(realEstate => realEstate.purchaseType === purchaseType);
        }

        this.setState({
            realEstates: filteredRealEstates
        });
    }

    loadRealEstates() {
        let viewType =  String(this.props.view).slice(7, -1);

        let backendUrl = process.env.REACT_APP_BACKEND_URL + "/" + viewType;

        axios
            .get(backendUrl)
            .then(response => {
                this.applyFilter(response.data)
            })
            .catch(error => console.log(error));
    }

    handleStateChange(id, view) {
        let backendUrl = process.env.REACT_APP_BACKEND_URL + "/state/" + id + "/" + "/" + String(view).slice(7, -1);

        axios
            .put(backendUrl)
            .then(response => {
                this.loadRealEstates()
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Form inline style={{ marginBottom:20, marginTop:20, marginLeft:20, marginRight:20 }}>
                    <FormGroup controlId="typeSelect">
                        <ControlLabel style={{marginRight: 5}}>Art der Immobilie</ControlLabel>
                        <FormControl inputRef={node => this.typeSelector = node} componentClass="select" onChange={this.loadRealEstates.bind(this)}>
                            <option value="both">Beides</option>
                            <option value="HOUSE">Haus</option>
                            <option value="FLAT">Wohnung</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="purchaseTypeSelect" style={{marginLeft: 10, marginRight: 10}}>
                        <ControlLabel style={{marginRight: 5}}>Miete / Kauf</ControlLabel>
                        <FormControl inputRef={node => this.purchaseTypeSelector = node} componentClass="select" onChange={this.loadRealEstates.bind(this)}>
                            <option value="both">Beides</option>
                            <option value="RENT">Miete</option>
                            <option value="BUY">Kauf</option>
                        </FormControl>
                    </FormGroup>
                </Form>
            <BootstrapTable keyField='id' data={ this.state.realEstates } columns={ this.columns }  pagination={ paginationFactory() } />
            </div>
        );
    }
}

export {RealEstateList};
