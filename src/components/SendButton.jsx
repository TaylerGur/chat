import React, { Component, PropTypes } from 'react';

class SendButton extends Component {
  static contextTypes = {
    sendMsg: PropTypes.func.isRequired
  }
 
  render() {

    return (
      <div className='send_button'>
        <button onClick={() => this.context.sendMsg()}>send</button>
      </div>
    );
  }


}




export default SendButton;
