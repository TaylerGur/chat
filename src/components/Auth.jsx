import React, { Component } from 'react';



class Auth extends Component {
  render() {
    return (
        <div className="auth">
          <div>
            <div className="auth_label">Nick</div>
            <input type="text" id="login_log" onChange={() => this.props.validate(this.authLog, 1)} ref={(input) => { this.authLog = input; }} />
            <div></div>
          </div>
          <div>
            <div className="auth_label">Пароль</div>
            <input type="password" id="pass_log" onChange={() => this.props.validate(this.authPass, 2)} ref={(input) => { this.authPass = input; }} />
          </div>
          <div className="auth_submit"><input type="button" value="Goo!" onClick={(e)=> this.props.submit(e,this.authPass.value, this.authLog.value, 'log')}  /></div>
        </div>

    );
  }
}


export default Auth;