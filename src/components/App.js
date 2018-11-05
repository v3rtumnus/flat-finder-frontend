import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Header} from './Header.js';
import {RealEstateList} from "./RealEstateList";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path='/' component={RealEstateList} />
                    <Route exact path='/new' component={RealEstateList} />
                    <Route exact path='/favorites' component={RealEstateList} />
                    <Route exact path='/archive' component={RealEstateList} />
                    <Route exact path='/blubb' render={(props) => (<Header test="hi" {...props}/>)} />

                </div>
            </Router>
        );
    }
}

export default App;
