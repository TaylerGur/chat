import { EDIT_NICK, FAIL, EDIT_ID, EDIT_USER } from '../actions/userDataActions';

const initialState = {id:0, nickName:"Аноним" ,ava:'http://localhost:81/dist/img/ava1.png', fail: false};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_USER:
    // console.log(action.payloads);
      // state.nickName = action.payloads.nick;
      // state.id = action.payloads.id;
      return {ava: state.ava, fail: state.fail, nickName : action.payloads.nick, id : action.payloads.id};
    case EDIT_NICK:
    state.nickName = action.payloads;
      return state;
    case EDIT_ID:
       state.id = action.payloads;
       return state;
    case FAIL:
      return {ava: state.ava, fail: action.payloads, nickName : state.nickName, id : state.id};
    default:
      return state;
  }
}