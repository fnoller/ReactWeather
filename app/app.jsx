import React from 'react';
import {render} from 'react-dom';

import Main from './components/Main';
import Weather from "./components/Weather/Weather";
import About from "./components/About/About";
import Examples from "./components/Examples/Examples";

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Load Bootstrap
require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('style!css!font-awesome/css/font-awesome.css');
require('applicationStyles');

render(

    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);

