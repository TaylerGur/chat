import axios from 'axios';

export const EDIT_NICK = 'EDIT_NICK';

export const EDIT_ID = 'EDIT_ID';
export const FAIL = 'FAIL';

export function editNickName(NickName) {
  // if (NickName === '' || !NickName) return { type: FAIL };
  return { type: EDIT_NICK, payloads: NickName };
}


export function editId(id) {
  // if (id == '' || !id) return { type: FAIL };
  return { type: EDIT_ID, payloads: id };
}

export function axi(url){
	return (dispatch) => {
			
		  	axios.post(url)
			  .then(function (response) {
			    if(response.data.nameUser && response.data.id){
					 dispatch(editNickName(response.data.nameUser));
					 dispatch(editId(response.data.id));
					return true;
				}
				else{
					return false;
				}		
					
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			 
	}
}