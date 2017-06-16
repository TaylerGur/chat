import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as D from '../../../../redux/actions/dialogActions';
import * as P from '../../../../redux/actions/locationActions';
import axios from 'axios';
import {BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import {  withRouter} from 'react-router-dom';
import Message from './Message/Message';



class Messages extends Component {

  componentDidUpdate(){

    console.log('disp',this.props.path);
    console.log('path', this.props.location.pathname);

     if(this.props.path != this.props.location.pathname.substring(6)){
        let self = this.props;
        axios.post('/api/get_dialog', {
          id : this.props.location.pathname.substring(6)
        })
        .then(function (response) {
          self.dispatch(D.createDialog(response.data));
       
        })
        .catch(function (error) {
          console.log(error);
        });

      


    }
       

  this.props.dispatch(P.editLocation(this.props.location.pathname.substring(6)));
     return true;
    
  }
  render() {

    this.dialog = this.props.dialog.map(function(e,i){
        return(<Message msg={e} key={i}/>);
    }); 
      return (

        <div className="messages">
          {this.dialog}
        
        </div>
       
    );
  }
}

function mapStateToProps(state) {
	return {
		dialog: state.dialog,
    path: state.location
	}
}
export default withRouter(connect(mapStateToProps)(Messages));