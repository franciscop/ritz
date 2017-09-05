import React, { Component } from 'react';
import './Nav.css';

export default (props) => (
  <nav>
    {props.children} : {props.links}
  </nav>
);
