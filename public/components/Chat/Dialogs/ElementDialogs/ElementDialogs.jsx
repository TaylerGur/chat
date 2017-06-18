import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class ElementDialogs extends Component {
  render() {
  	
    return (

        <div className="element_dialogs">
         	  <div className="element_dialogs_title"><Link to={'/chat/' + this.props.id}>{this.props.title}</Link></div>
            
        </div>
       
    );
  }
}


export default ElementDialogs;