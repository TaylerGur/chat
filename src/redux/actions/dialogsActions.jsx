import axios from 'axios';  


export const CREATE_DIALOGS = 'CREATE_DIALOGS';
export const GET_DIALOGS = 'GET_DIALOGS';
export const FAIL_DIALOGS = 'FAIL_DIALOGS';
export const ADD_DIALOGS = 'ADD_DIALOGS';
export const DEL_DIALOGS = 'DEL_DIALOGS';


export function addDialogs(url, title){
	return (dispatch) => {
		return axios.post(url, {
	            title: title
	    	})
	    	.then((response) => {
	    			if(response.data){
			    		console.log(response);
	    	    	 	let socket = io.connect('http://localhost:80');
	        			socket.emit('update_dialogs_server');
	            	   	dispatch({type: ADD_DIALOGS, payloads: response.data});
		  			}
	        	 }
	          )
	          .catch(function (error) {
	            	console.log(error);
	          });
	 }
}

export function createDialogs(url){
	return (dispatch) => {
		return axios.post(url)
	    	.then((response) => {
	    			if(response.data){
			    		// console.log(response);
	    	   //  	 	let socket = io.connect('http://localhost:80');
	        			// socket.emit('update_dialogs_server');
	            	   	dispatch({ type: CREATE_DIALOGS, payloads: response.data });
		  			}
	        	 }
	          )
	          .catch(function (error) {
	            	console.log(error);
	          });
	 }
}

