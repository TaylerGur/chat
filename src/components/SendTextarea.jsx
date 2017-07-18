import React, { Component, PropTypes } from 'react';



class SendTextarea extends Component {
  static contextTypes = {
        sendMsg: PropTypes.func.isRequired,
        changeTextarea: PropTypes.func.isRequired,
        valueTextarea: PropTypes.func.isRequired
  }
   enterSend(evt, value){
      if(evt.keyCode==13) this.context.sendMsg(value);
  }
  render() {
    return (
      <div className='send_message'  >
        <input type='text' value={this.context.valueTextarea()} ref={(textarea) => {this.valueTextarea = textarea;}} onChange={() => this.context.changeTextarea(this.valueTextarea.value)}
           onKeyDown={(evt) => this.enterSend(evt,this.valueTextarea)} placeholder='Write here...' />
      </div>
    );
  }


}


export default SendTextarea;
