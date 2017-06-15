import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as U from '../../../redux/actions/userDataActions';
// import createHistory from 'history';
import {  withRouter} from 'react-router-dom'

// const history = createHistory();


class Auth extends Component {
	logIn(){

		
		
		let redirect = this.props.history;
		let dispatch = this.props.dispatch;
		let login_log = document.getElementById('login_log').value;
		let pass_log = document.getElementById('pass_log').value;
		axios.post('/api/get_user', {
		    nick: login_log,
		    pass:  pass_log
		  })
		  .then(function (response) {
		    if(response.data.nameUser){
		    	console.log("dispatch");
		        dispatch(U.editNickName(response.data.nameUser));
		        dispatch(U.editId(response.data.idUser));
				console.log(response);
				redirect.push('/chat');
				

			}
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
  render() {
    return (
        <div className="auth">
          <div>
            <div className="auth_label">Логин</div>
            <input type="text" id="login_log"/>
          </div>
          <div>
            <div className="auth_label">Пароль</div>
            <input type="text" id="pass_log"/>
          </div>
          <div><input type="button" value="Log In" onClick={()=> this.logIn()}/></div> 
                  
            {this.props.User.nickName}
            {this.props.User.id}
            {console.log(this.props)}
        </div>
       
    );
  }
}
function mapStateToProps(state){
  return {
    User : state.userData
  }
}

export default withRouter(connect(mapStateToProps)(Auth));