import React, { Component } from 'react';
import SendButton from './SendButton';
import SendTextarea from './SendTextarea';




class Sender extends Component {

  render() {
    return (
      <div className="sender">
        <SendTextarea />
        <SendButton  />
      </div>
    );
  }

}



export default Sender;
