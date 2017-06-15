import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Message extends Component {

  render() {
    const data = this.props.msg;
    const class1 = ' message ';
    const class2 = ' author_message ';

    return (
      <div className = {class1 + ((data.author === this.props.NickName)  ? 'message_me' : '')} id = {data.id}>
        <div className='ava'>
          <img src={data.ava}/>
        </div>
        <div>
          <div className = {class2 + ((data.author === this.props.NickName) ? ' author_message_me' : '')} >
            {data.author_id}
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
  return { NickName:state.NickName };
}


export default connect(mapStateToProps)(Message);
