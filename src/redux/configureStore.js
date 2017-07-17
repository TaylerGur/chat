import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import userDataReducer from './reducers/userDataReducer';
import dialogsReducer from './reducers/dialogsReducer';
import dialogReducer from './reducers/dialogReducer';
import locationReducer from './reducers/locationReducer';
import valueTextareaReducer from './reducers/valueTextareaReducer';

export default function (initialState = {}) {
  const rootReducer = combineReducers({
        userData : userDataReducer,
        dialogs: dialogsReducer,
        dialog : dialogReducer,
        location: locationReducer,
        valueTextarea : valueTextareaReducer
  });

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
