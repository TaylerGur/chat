import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as Nick from '../../redux/actions/nickNameActions';
import axios from 'axios';

class Menu extends Component {
  render() {
  	
    return (

        <div className="menu">
         	<div className="menu_user">{this.props.nickName}</div>
         	<div className="menu_exit"><a href="/api/delete_session">Выйти</a></div>
         	<br/>
         	
        </div>
       
    );
  }
}

function mapStateToProps(state) {
	return {
		nickName: state.nickName
	}
}
export default connect(mapStateToProps)(Menu);