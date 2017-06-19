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

    // console.log('disp',this.props.path);
    // console.log('path', this.props.location.pathname);

     if(this.props.path != this.props.location.pathname.substring(6)){
        let self = this.props;
        axios.post('/api/get_dialog', {
          id : this.props.location.pathname.substring(6)
        })
        .then(function (response) {
          console.log(response.data);
          self.dispatch(D.createDialog(response.data));
       
        })
        .catch(function (error) {
          console.log(error);
        });
        
        let socket = io.connect('http://localhost:80');
        socket.on("update_messages_client", () => {
            let self = this.props;
            axios.post('/api/get_dialog', {
              id : this.props.location.pathname.substring(6)
            })
            .then(function (response) {
              console.log("ssss", response.data)
              self.dispatch(D.createDialog(response.data));
           
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      


    }
       

  this.props.dispatch(P.editLocation(this.props.location.pathname.substring(6)));

  this.toScroll = () => {
          let messages = document.getElementById('messages');
          messages.scrollTop = messages.scrollHeight;
  }
  this.toScroll();
     

  return true;
    
  }
 
  render() {

    if(Array.isArray(this.props.dialog) && this.props.dialog[0].dialog_id != 100500){
      this.dialog = this.props.dialog.map(function(e,i){
        return(<Message msg={e} key={i}/>);
      }); 
    }
    else{
      this.dialog = (
          <div>
              <h3 className="messages_title">В Чате пусто, напишите что-нибудь;)</h3>
          </div>

        );
    }
    
    this.changeMessages = (
          <div>
              <h3 className="messages_title">Выберите чат;)</h3>
          </div>

    );
    
      return (

        <div id="messages" className="messages">
          {Array.isArray(this.props.dialog) &&  this.props.dialog[0].dialog_id == 100500 ? this.changeMessages : this.dialog }
        
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