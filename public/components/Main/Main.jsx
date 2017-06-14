import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth/Auth';
import Reg from './Reg/Reg';

class Main extends Component {
  render() {
    return (
        <div>
         	<Auth/>
         	<Reg/>
        </div>
       
    );
  }
} 


export default Main;