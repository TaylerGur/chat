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
          
       
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      

        this.props.dispatch(addMsg.addMessage( {
            date : Date.now(),
            nickName : this.props.User.nickName,
            text : this.props.Value
          }));
    
    this.props.dispatch(changeTextarea.changeTextarea(''));
    // this.valueTextarea.innerText = '';
    // console.log(this.valueTextarea);
  }
  render() {
    return (
      <div>
        <SendTextarea ref={(textarea) => {this.valueTextarea = textarea;}}/>
        <SendButton send={()=> this.sendMsg()}/>
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
