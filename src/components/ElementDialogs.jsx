import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';


class ElementDialogs extends Component {
  render() {
  	this.pathname = this.props.history.location.pathname;
  	this.link = '/chat/' + this.props.id;
    return (

        <div className="element_dialogs">
         	  <div className={this.pathname == this.link?"element_dialogs_active":"element_dialogs_title"}><Link to={this.link}>{this.props.title}</Link></div>
        </div>

    );
  }
}


export default withRouter(ElementDialogs);