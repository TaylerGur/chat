import { FAIL_DIALOGS, CREATE_DIALOGS, ADD_DIALOGS } from '../actions/dialogsActions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FAIL_DIALOGS:
      return state;
    case CREATE_DIALOGS:
      return action.payloads;
    case ADD_DIALOGS:
      return [...state, ...action.payloads];
    default: 
      return state;
  }
}