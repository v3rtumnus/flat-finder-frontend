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
                    <Route exact path='/' render={() => <RealEstateList view={RealEstateListView.SAVED}/>}/>
                    <Route exact path='/saved' render={() => <RealEstateList view={RealEstateListView.SAVED}/>}/>
                    <Route exact path='/favorites' render={() => <RealEstateList view={RealEstateListView.FAVORITE}/>}/>
                    <Route exact path='/archive' render={() => <RealEstateList view={RealEstateListView.ARCHIVED}/>}/>

                </div>
            </Router>
        );
    }
}

export default App;
