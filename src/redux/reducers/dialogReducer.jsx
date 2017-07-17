import { FAIL_DIALOG, CREATE_DIALOG, ADD_MESSAGE } from '../actions/dialogActions';

const initialState = [{dialog_id:100500}];

export default function (state = initialState, action) {
  switch (action.type) {
    case FAIL_DIALOG:
      return state;
    case CREATE_DIALOG:
      // console.log(state);
      // console.log(action.payloads);
      // if(state.length >= action.payloads && state[0].dialog_id != action.payloads[0].dialog_id) return state;
      return action.payloads;
    case ADD_MESSAGE:
      return [...state, action.payloads];
    default: 
      return state;
  }
}