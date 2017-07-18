import React, { Component } from 'react';



class NoValid extends Component {
	  render() {

    return (
        <div className={ this.props.failAuthReg || this.props.valid != 0? "NoValidContainer" : "displayNone"}>
        	<h2 className="NoValidContainer_title">Памилка!</h2>
        	<h4 className="NoValidContainer_text">{this.props.textMsg}</h4>
        </div>
       
    );
  }
} 


export default NoValid;