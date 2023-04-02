import changeNumber from './IncDec';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  changeNumber,
  //changeNumber: changeNumber,
});

export default rootReducer;
