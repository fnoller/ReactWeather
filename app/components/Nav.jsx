import React from 'react';
import {Link, IndexLink} from 'react-router';

let Nav = (props) => {
  return (
      <nav className="navbar navbar-inverse">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <IndexLink className="navbar-brand" to="/" >Project name</IndexLink>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                      <li><IndexLink activeClassName="active" to="/" >Get Weather</IndexLink></li>
                      <li><Link activeClassName="active" to="/about" >About</Link></li>
                      <li><Link activeClassName="active" to="/examples" >Examples</Link></li>
                  </ul>{/**/}
              </div>
          </div>
      </nav>
  );
};


export default Nav;
