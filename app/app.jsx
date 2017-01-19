import React from 'react';
import {render} from 'react-dom';

import Main from './components/Main';
import Weather from "./components/Weather/Weather";
import About from "./components/About/About";
import Examples from "./components/Examples/Examples";

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

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

