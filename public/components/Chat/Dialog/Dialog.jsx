import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  withRouter} from 'react-router-dom';
import Messages from './Messages/Messages';
import Sender from './Sender/Sender';


class Dialog extends Component {
  
  render() {
    return (

        <div className="dialog">

          <Messages/>
          <Sender/>
        </div>
       
    );
  }
}

function mapStateToProps(state) {
	return {
		dialog: state.dialog,
    path: state.location
	}
}
export default withRouter(connect(mapStateToProps)(Dialog));