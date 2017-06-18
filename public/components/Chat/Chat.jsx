import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as U from '../../redux/actions/userDataActions';
import {  withRouter} from 'react-router-dom';
import axios from 'axios';  
import Menu from './Menu/Menu';
import Dialogs from './Dialogs/Dialogs';
import Dialog from './Dialog/Dialog';

class Chat extends Component {

  render() {
  	// console.log(this.props);
		let dispatch = this.props.dispatch;
		  	let history = this.props.history;
			axios.post('/api/get_session')
				  .then(function (response) {
					    if(response.data.nameUser && response.data.id){
					    	dispatch(U.editNickName(response.data.nameUser));
					    	dispatch(U.editId(response.data.id));
						}
						else{
							history.push('/');
						}
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
  	
  
    return (
    	<div className="chat">
    	
			<Menu user={this.props.User}/>
        	<div className="chat_content">
        		<Dialogs/>
        		
        		<Dialog/>
        	</div>
       </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		User: state.userData,
		nick: state.userData.nickName
	}
}
export default withRouter(connect(mapStateToProps)(Chat));