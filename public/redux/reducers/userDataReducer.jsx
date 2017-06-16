import { EDIT_NICK, FAIL, EDIT_ID } from '../actions/userDataActions';

const initialState = {id:0, nickName:"" ,ava:'http://localhost:81/dist/img/ava1.png'};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_NICK:
      let s = state;
      s.nickName = action.payloads;
      return state;
    case EDIT_ID:
       state.id = action.payloads;        
       return state;
    case FAIL:
      return state;
    default: 
      return state;
  }
}