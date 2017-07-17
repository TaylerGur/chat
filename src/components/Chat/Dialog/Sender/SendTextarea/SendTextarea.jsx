import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as changeTextarea from '../../../../../redux/actions/valueTextareaActions';


class SendTextarea extends Component {
  changeValueTextarea() {
    this.props.dispatch(changeTextarea.changeTextarea(this.valueTextarea.value));
  }
  render() {
     const { enterSend } = this.props;
    return (
      <div className='send_message'  >
        <input type='text' value={this.props.value} ref={(textarea) => {this.valueTextarea = textarea;}}
          onChange={() => this.changeValueTextarea()} onKeyDown={enterSend} placeholder='Write here...' />
      </div>
    );
  }


}
function mapStateToProps(state) {
  return { value : state.valueTextarea };
}

export default connect(mapStateToProps)(SendTextarea);
