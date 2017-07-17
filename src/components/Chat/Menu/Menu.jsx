import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as U from '../../../redux/actions/userDataActions';
import * as D from '../../../redux/actions/dialogsActions';
import axios from 'axios';

class Menu extends Component {

  addChat(){

    let title = prompt('Название чата:');
    let self = this.props;
    axios.post('/api/add_dialog', {
      title: title
    })
      .then(function (response) {
        self.dispatch(D.addDialogs(response.data));
        let socket = io.connect('http://localhost:80');
        socket.emit('update_dialogs_server');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    
    return (

        <div className="menu">
    

         	<div className="menu_user" >{this.props.nick}</div>
          <div className="menu_add" onClick={() => this.addChat()}>add chat</div>
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