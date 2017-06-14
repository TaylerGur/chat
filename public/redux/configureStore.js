import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import nickNameReducer from './reducers/nickNameReducer';

export default function (initialState = {}) {
  const rootReducer = combineReducers({
        nickName : nickNameReducer
  });

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
