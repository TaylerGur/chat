import React, { Component } from 'react';

class Reg extends Component {
	
  render() {
    return (

        <div className="reg">
          <div>
            <div className="reg_label">Nick</div>
            <input type="text" id="nickReg" onChange={() => this.props.validate(this.regLog, 3)} ref={(input) => { this.regLog = input; }}  />
          </div>
          <div>
            <div className="reg_label">Пароль</div>
            <input type="password" id="passReg" onChange={() => this.props.validate(this.regPass, 4)} ref={(input) => { this.regPass = input; }}  />
          </div>
          <div className="reg_submit"><input type="button" value="Регистрация" onClick={(e)=> this.props.submit(e,this.regPass.value, this.regLog.value, 'reg')}/></div>
        </div>
    );
  }
}


export default Reg;