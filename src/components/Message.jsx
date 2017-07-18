import React, { Component, PropTypes } from 'react';
class Message extends Component {
   static contextTypes = {
    getUser: PropTypes.func.isRequired
  }
  render() {
    const data = this.props.msg;
    const class1 = ' message ';
    const class2 = ' author_message ';
    const user = this.context.getUser();


    return (
      <div className = {class1 + ((data.author_id === user.id)  ? 'message_me' : '')} id = {data.id}>
        <div className='ava'>
          <img src={ data.author_id !== user.id? '/dist/img/ava1.png': '/dist/img/ava2.png'}/>
        </div>
        <div>
          <div className = {class2 + ((data.author_id == user.id) ? ' author_message_me' : '')} >
            {data.nickName}
          </div>
          <div className='text_message'>
            {data.text}
          </div>
        </div>
      </div>

    );
  }
}

export default Message;
