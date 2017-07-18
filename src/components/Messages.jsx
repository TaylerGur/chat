import React, { Component } from 'react';
import Message from './Message';



class Messages extends Component {

    componentDidUpdate(){
        this.props.toScroll(this.dialogScroll);
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

        <div id="messages" className="messages" ref={(div) => { this.dialogScroll = div; }} >
          {Array.isArray(this.props.dialog) &&  this.props.dialog[0].dialog_id == 100500 ? this.changeMessages : this.dialog }
        
        </div>
       
    );
  }
}

export default Messages;