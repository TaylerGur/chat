import React, { Component } from 'react';

class SendButton extends Component {

  render() {
    const { send } = this.props;
    return (
      <div className='send_button'>
        <button onClick={ send }>send</button>
      </div>
    );
  }


}




export default SendButton;
