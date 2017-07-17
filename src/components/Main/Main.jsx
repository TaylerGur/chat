import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth/Auth';
import Reg from './Reg/Reg';

class Main extends Component {
  render() {
    return (
        <div className="main">
        	<h2>LocalChat</h2>
        	<h4>Your home chat*</h4>
         	<Auth/>
         	<h4>Для тех кто в первый раз*</h4>
         	<Reg/>
        </div>
       
    );
  }
} 


export default Main;