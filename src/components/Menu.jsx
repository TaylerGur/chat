import React, { Component } from 'react';


class Menu extends Component {

  render() {
    return (

        <div className="menu">
    

         	<div className="menu_user" >{this.props.user.nickName}</div>
          <div className="menu_add" onClick={() => this.props.addChat()}>add chat</div>
          <div className="menu_exit"><a href="/api/delete_session">Выйти</a></div>
         	<br/>
         	
        </div>
       
    );
  }
}



export default Menu;
// export default connect(mapStateToProps)(Menu);