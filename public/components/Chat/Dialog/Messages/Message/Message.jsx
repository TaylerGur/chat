import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Message extends Component {

  render() {
    const data = this.props.msg;
    const class1 = ' message ';
    const class2 = ' author_message ';
    // console.log('data', data);

    return (
      <div className = {class1 + ((data.author_id === this.props.user.id)  ? 'message_me' : '')} id = {data.id}>
        <div className='ava'>
          <img src={ data.author_id !== this.props.user.id? '/dist/img/ava1.png': '/dist/img/ava2.png'}/>
        </div>
        <div>
          <div className = {class2 + ((data.author_id == this.props.user.id) ? ' author_message_me' : '')} >
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

Message.PropTypes = {  msg : PropTypes.object, NickName : PropTypes.string  };

function mapStateToProps(state) {
  return { user:state.userData };
}


export default connect(mapStateToProps)(Message);
