import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  withRouter} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Auth from '../components/Auth';
import Reg from '../components/Reg';
import NoValid from '../components/NoValid';
import * as U from '../redux/actions/userDataActions';

class Main extends Component {
    constructor(props) {
      super(props);
          this.state = {
            validErr: 0,
            textMsg: '',
            failAuthReg: false
          };
          this.validMas = [];
    }
  
    logReg(e, pass, log, type){
        if(this.state.validErr > 0 || pass == '' || log == '') {
            
             e.stopPropagation();
             e.nativeEvent.stopImmediatePropagation();
            return;
        }

        let urlType ={
            log : '/api/get_user',
            reg : '/api/add_user'
        }
        this.props.dispatch(U.editUser(urlType[type], log, pass));

    }
  validateForm(input, n){
        if(input.value == "") return;
        if(input.value.search( /^\w+$/i )) {
            if(this.validMas[n] != true){
                this.setState({ validErr : this.state.validErr + 1 });
                this.validMas[n] = true;
            }
                this.setState({ textMsg: 'На территории нашего чата, для логинов и паролей запрещено использовать cпец.символы такие как: !$%^&*-+=... и т.д.' });
                

            input.classList.add('noValid');
        }else{
            if(this.validMas[n]){
                this.setState({ validErr : this.state.validErr - 1 });
                this.setState({ failAuthReg : false });
                this.validMas[n] = false;
              
            }
            

            input.classList.remove('noValid');
        }
  }
  componentDidUpdate(){
 
        if(this.props.Fail == false && this.props.User.nickName && this.props.User.id)  this.props.history.push('/chat');
        if(this.props.Fail != false){

            switch(this.props.Fail){

                case 'Ник занят!':
                    this.setState({ textMsg: 'Логин занят другим пользователем!' });
                    this.setState({ failAuthReg: true});
                     this.props.dispatch(U.fail(false));
                    break;
                case 'Пользователь с таким логином и паролем не найден!':
                    this.setState({ textMsg: 'Пользователь с таким логином и паролем не найден!' });
                    this.setState({ failAuthReg: true});
                     this.props.dispatch(U.fail(false));
                    break;
                }
            }
  }
  render() {

    return (
        <div className="main">

        	<h2>LocalChat</h2>
        	<h4>Your home chat*</h4>
         	<Auth validate={this.validateForm.bind(this)} valid={this.state.validErr} submit={this.logReg.bind(this)} />
         	<h4>Для тех кто в первый раз*</h4>
         	<Reg validate={this.validateForm.bind(this)} valid={this.state.validErr} submit={this.logReg.bind(this)} />
            <NoValid valid={this.state.validErr} textMsg={this.state.textMsg} failAuthReg={this.state.failAuthReg}/>
        </div>

    );
  }
}

function mapStateToProps(state){
  return {
    Nick : state.userData.nickName,
    Fail : state.userData.fail,
    User: state.userData
  }
}


export default withRouter(connect(mapStateToProps)(Main));