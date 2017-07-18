import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as U from '../redux/actions/userDataActions';
import * as D from '../redux/actions/dialogsActions';
import {  withRouter} from 'react-router-dom';
import axios from 'axios';  
import Menu from '../components/Menu';
import Dialogs from '../components/Dialogs';
import Dialog from './Dialog';






class Chat extends Component {
	 componentDidMount(){
		this.props.dispatch(U.getSessionUser('/api/get_session'));
		this.props.dispatch(D.createDialogs('/api/get_dialogs'));

		 let socket = io.connect('http://localhost:80');
      	 socket.on('update_dialogs_client', () => {
      	 	this.props.dispatch(D.createDialogs('/api/get_dialogs'));
      	 });

	}
	componentDidUpdate(){
		if(this.props.User.fail) this.props.history.push('/');
	}
	addChat(){
	    let title = prompt('Название чата:');
		this.props.dispatch(D.addDialogs('/api/add_dialog', title));
		let socket = io.connect('http://localhost:80');
		socket.emit('update_dialogs_server');
	    //     socket.emit('update_dialogs_server');
	    // // let self = this.props;
	    // axios.post('/api/add_dialog', {
	    //   title: title
	    // })
	    //   .then((response) => {
	    //     this.props.dispatch(D.addDialogs(response.data));
	    //     let socket = io.connect('http://localhost:80');
	    //     socket.emit('update_dialogs_server');
	    //   })
	    //   .catch(function (error) {
	    //     console.log(error);
	    //   });
  	}

  render() {

    return (
    	<div className="chat">

			<Menu user={this.props.User} addChat={this.addChat.bind(this)}/>
        	<div className="chat_content">
        		<Dialogs update={()=> this.updateDialogs()} dialogs={this.props.dialogs} />

        		<Dialog/>
        	</div>
       </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		User: state.userData,
		nick: state.userData.nickName,
		dialogs: state.dialogs
	}
}
export default withRouter(connect(mapStateToProps)(Chat));