import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as D from '../../../redux/actions/dialogsActions';
import axios from 'axios';
import ElementDialogs from './ElementDialogs/ElementDialogs';

class Dialogs extends Component {
  componentWillMount(){
      let self = this.props;
    axios.post('/api/get_dialogs')
      .then(function (response) {
        self.dispatch(D.addDialogs(response.data));
        // console.log(response.data);
        // console.log(self);
      })
      .catch(function (error) {
        console.log(error);
      });
      


  }
  render() {
      this.dialogs_render = this.props.dialogs_mas.map(function(e, i){
          return (<ElementDialogs title={e.title} key={i} id={e.id} />);
      });

      // console.log(this.props.dialogs_mas);
      // console.log('aa');
    return (

        <div className="dialogs">
            {this.dialogs_render}
        </div>
       
    );
  }
}

function mapStateToProps(state) {
	return {
		dialogs_mas: state.dialogs
	}
}
export default connect(mapStateToProps)(Dialogs);