import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as changeTextarea from '../../../../../redux/actions/valueTextareaActions';


class SendTextarea extends Component {
  changeValueTextarea() {
    this.props.dispatch(changeTextarea.changeTextarea(this.valueTextarea.value));
  }
  render() {
    return (
      <div className='send_message'  >
        <textarea value={this.props.value} ref={(textarea) => {this.valueTextarea = textarea;}}
          onChange={() => this.changeValueTextarea()} placeholder='Write here...' />
      </div>
    );
  }


}
function mapStateToProps(state) {
  return { value : state.valueTextarea };
}

export default connect(mapStateToProps)(SendTextarea);
