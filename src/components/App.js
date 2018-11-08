import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header} from './Header.js';
import {RealEstateList} from "./RealEstateList";
import {RealEstateListView} from "../entities/RealEstateListView";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path='/' render={() => <RealEstateList view={RealEstateListView.NEW}/>}/>
                    <Route exact path='/new' render={() => <RealEstateList view={RealEstateListView.NEW}/>}/>
                    <Route exact path='/favorites' render={() => <RealEstateList view={RealEstateListView.FAVORITE}/>}/>
                    <Route exact path='/archive' render={() => <RealEstateList view={RealEstateListView.ARCHIVE}/>}/>

                </div>
            </Router>
        );
    }
}

export default App;
