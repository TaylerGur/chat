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
        // console.log(response.data);
        self.dispatch(D.createDialogs(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  

      let socket = io.connect('http://localhost:80');
      socket.on('update_dialogs_client', () => {
      // console.log(D);
    

      // console.log("update_dialogs_client");
      let self = this.props;
      axios.post('/api/get_dialogs')
      .then(function (response) {
        // console.log(self);
        // console.log(response.data);
        self.dispatch(D.createDialogs(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    });



     


  }
  render() {
      // this.props.update();
      // console.log(this.props);
      this.dialogs_render = this.props.dialogs_mas.map(function(e, i){
          return (<ElementDialogs title={e.title} key={i} id={e.id} />);
      });

    return (

        <div className="dialogs">
            <h4>Чаты</h4>
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