import { FAIL_LOCATION, EDIT_LOCATION } from '../actions/locationActions';

const initialState = "";

export default function (state = initialState, action) {
  switch (action.type) {
    case FAIL_LOCATION:
      return state;
    case EDIT_LOCATION:
      return action.payloads;
    default: 
      return state;
  }
}