import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Id from './Id';

class App extends Component {
  render() {
    return (
        <div>
             Hello world!!!
            
                    <ul>
                         <li><Link to="/about">1</Link></li>
                        <li><Link to="/contact">2</Link></li>
                        <li><Link to="/id">id</Link></li>
                    </ul>
            
        </div>
       
    );
  }
}


export default App;
