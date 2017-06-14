import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Reg extends Component {
	reg(){
		let nickReg = document.getElementById('nickReg').value;
		let passReg = document.getElementById('passReg').value;
	
		axios.post('/api/add_user', {
		    nick: nickReg,
		    pass: passReg
		  })
		  .then(function (response) {
		    console.log(response);
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
            <input type="text" id="nickReg"/>
          </div>
          <div>
            <div className="auth_label">Пароль</div>
            <input type="password" id="passReg"/>
          </div>
          <div><input type="button" value="Reg" onClick={()=> this.reg()}/></div> 
                  
            
        </div>
       
    );
  }
}


export default Reg;