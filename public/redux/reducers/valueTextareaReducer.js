import { CHANGE_TEXTAREA } from '../actions/valueTextareaActions';

// const initialState = {NickName : 'Аноним'};
const initialState = '';

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXTAREA:
      return action.payloads;
    default:
      return state;
  }
}
