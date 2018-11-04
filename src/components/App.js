import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Header} from './Header.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path='/' render={(props) => (<Header test="hi" {...props}/>)} />

                </div>
            </Router>
        );
    }
}

export default App;
