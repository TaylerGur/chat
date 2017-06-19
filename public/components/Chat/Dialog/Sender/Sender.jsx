import React, { Component } from 'react';
import { connect } from 'react-redux';
import SendButton from './SendButton/SendButton';
import SendTextarea from './SendTextarea/SendTextarea';
import * as addMsg from '../../../../redux/actions/dialogActions';
import * as changeTextarea from '../../../../redux/actions/valueTextareaActions';
import axios from 'axios';
import {  withRouter} from 'react-router-dom';



class Sender extends Component {
  sendMsg(){
      if(this.props.Value != ''){
        axios.post('/api/add_message', {
          dialog_id : this.props.location.pathname.substring(6),
          author_id: this.props.User.id,
          date: Date.now(),
          text: this.props.Value
        })
        .then(function (response) {
             let socket = io.connect('http://localhost:80');
             socket.emit('update_messages_server');
       
        })
        .catch(function (error) {
          console.log(error);
        });
      




        this.props.dispatch(addMsg.addMessage( {
            date : Date.now(),
            nickName : this.props.User.nickName,
            text : this.props.Value,
            author_id: this.props.User.id
          }));

      }
      

        
    
    this.props.dispatch(changeTextarea.changeTextarea(''));

  }
  enterSend(evt){
      if(evt.keyCode==13) this.sendMsg();
  }
  render() {
    return (
      <div className="sender">
        <SendTextarea enterSend={this.enterSend.bind(this)} ref={(textarea) => {this.valueTextarea = textarea;}}/>
        <SendButton send={()=> this.sendMsg()} />
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    Value : state.valueTextarea,
    User : state.userData
  }
}

export default withRouter(connect(mapStateToProps)(Sender));
