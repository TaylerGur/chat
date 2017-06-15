import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as Nick from '../../redux/actions/nickNameActions';
import axios from 'axios';
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

function mapStateToProps(state) {
	return {
		nickName: state.nickName
	}
}
export default ElementDialogs;