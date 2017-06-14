import { EDIT_NICK, FAIL_NICK, GET_NICK } from '../actions/NickNameActions';

const initialState = '';

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_NICK:
      return action.payloads;
    case FAIL_NICK:
      return state;
    case GET_NICK:
      return state;
    default: 
      return state;
  }
}