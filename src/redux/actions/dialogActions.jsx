import axios from 'axios';
export const CREATE_DIALOG = 'CREATE_DIALOG';
export const FAIL_DIALOG = 'FAIL_DIALOG';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DEL_DIALOG = 'DEL_DIALOG';



export function createDialog(url, dialogId){
	return (dispatch) => {
		return axios.post(url, {
			id: dialogId
		})
	    	.then((response) => {
	    			if(response.data){
			    		
	            	   	dispatch({ type: CREATE_DIALOG, payloads: response.data });
		  			}
	        	 }
	          )
	          .catch(function (error) {
	            	console.log(error);
	          });
	 }
}
export function addMessage(url, dialogId, authorId, text, date, nick){
	return (dispatch) => {
		return axios.post(url, {
			dialog_id : dialogId,
          	author_id: authorId,
          	date: date,
          	text: text
		})
	    	.then((response) => {
	    			if(response.data){
	            	   	dispatch({ type: ADD_MESSAGE, payloads: {
	            	   		date : date,
				            nickName : nick,
				            text : text,
				            author_id: authorId
				        }});
	            	   	let socket = io.connect('http://localhost:80');
             			socket.emit('update_messages_server');
		  			}
	        	 }
	          )
	          .catch(function (error) {
	            	console.log(error);
	          });
	 }
}

