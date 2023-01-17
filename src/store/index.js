import shaking from './shaking';
import cartItems from './cartItems';
import {combineReducers} from 'redux';

//Mix two stores into one
const allReducers = combineReducers({
  shaking: shaking,
  // Use the concatenated API data instead, leaving the original data for future reference
  cartItems:cartItems,
})
export default allReducers;