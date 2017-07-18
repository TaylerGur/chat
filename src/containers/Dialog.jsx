import React, { Component , PropTypes} from 'react';
import { connect } from 'react-redux';
import {  withRouter} from 'react-router-dom';
import Messages from '../components/Messages';
import Sender from '../components/Sender';
import * as D from '../redux/actions/dialogActions';
import * as P from '../redux/actions/locationActions';
import * as V from '../redux/actions/valueTextareaActions';


class Dialog extends Component {
  static childContextTypes = {
    getUser: PropTypes.func,
    sendMsg: PropTypes.func,
    changeTextarea: PropTypes.func,
    valueTextarea: PropTypes.func
  };
  
   getChildContext() {
    return {
      getUser: () => (this.props.User),
      sendMsg: this.sendMsg.bind(this),
      changeTextarea: this.changeTextarea.bind(this),
      valueTextarea: () => this.props.Value

    };
  }
  componentDidUpdate(){
  	if(this.props.path != this.props.location.pathname.substring(6)){
  		this.props.dispatch(D.createDialog('/api/get_dialog', this.props.location.pathname.substring(6)));
  	}
  	let socket = io.connect('http://localhost:80');
    socket.on("update_messages_client", () => {
  			this.props.dispatch(D.createDialog('/api/get_dialog', this.props.location.pathname.substring(6)));
  	});
  	this.props.dispatch(P.editLocation(this.props.location.pathname.substring(6)));
  }
  toScroll(elem) {
          elem.scrollTop = messages.scrollHeight;
  }
  sendMsg(){
  		if(this.props.Value == '') return;
	  	this.props.dispatch(D.addMessage( '/api/add_message',this.props.location.pathname.substring(6), this.props.User.id, this.props.Value, Date.now(), this.props.User.nickName));
	    this.props.dispatch(V.changeTextarea(""));

  }
  changeTextarea(value){
    this.props.dispatch(V.changeTextarea(value));
  }
  render() {
    return (
        <div className="dialog">
          <Messages dialog={this.props.dialog} toScroll={this.toScroll}/>
          <Sender/>
        </div>
    );
  }
}

function mapStateToProps(state){
	return{
		User: state.userData,
		dialog : state.dialog,
		path: state.location,
		Value: state.valueTextarea
	}
}

export default withRouter(connect(mapStateToProps)(Dialog));