import React from 'react';
import Nav from './Nav';

let Main = (props) => {
  return (
      <div className="container text-center">
          <Nav/>
          {props.children}
      </div>
  );
};

export default Main;


