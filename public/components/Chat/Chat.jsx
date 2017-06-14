import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Nick from '../../redux/actions/nickNameActions';
import {  withRouter} from 'react-router-dom';
import axios from 'axios';
import Menu from

class Chat extends Component {
  render() {
  	let dispatch = this.props.dispatch;
  	let history = this.props.history;
	axios.post('/api/get_session')
		  .then(function (response) {
		    if(response.data.nameUser && response.data.id){
		    	// console.log(response.data.nameUser);
		    	dispatch(Nick.editNickName(response.data.nameUser));
			}
			else{
				history.push('/');
			}
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
 	
  	// console.log(this.props.nickName);
  	// console.log(this.props);
    return (

        <div>
         	Chat!!!
         	<a href="/api/delete_session">Выйти</a>
         	<br/>
         	{this.props.nickName}
        </div>
       
    );
  }
}

function mapStateToProps(state) {
	return {
		nickName: state.nickName
	}
}
export default withRouter(connect(mapStateToProps)(Chat));