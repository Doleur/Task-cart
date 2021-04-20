import { combineReducers, createStore } from 'redux';

let reducers = combineReducers({
  r1,
  r2,
  r3
});

let store = createStore(reducers);

export default store;
