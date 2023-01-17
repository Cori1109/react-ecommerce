import { createStore } from 'redux';
import allReducer from './';

//Create a store, import the merged allReducer, and the second parameter is the extension tool of chrome
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;