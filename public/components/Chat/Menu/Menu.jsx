import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as U from '../../../redux/actions/userDataActions';

import axios from 'axios';

class Menu extends Component {

  render() {
    
    return (

        <div className="menu">
    

         	<div className="menu_user">{this.props.nick}</div>
        
          <div className="menu_exit"><a href="/api/delete_session">Выйти</a></div>
         	<br/>
         	
        </div>
       
    );
  }
}

function mapStateToProps(state) {
	return {
		nick: state.userData.nickName,
    id : state.userData.id
	}
}
export default connect(mapStateToProps)(Menu);