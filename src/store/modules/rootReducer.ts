import { combineReducers } from 'redux';
import incomeIn from './income-in/incomeInSlice';
import incomeOut from './income-out/incomeOutSlice';

const rootReducer = combineReducers({
  incomeIn,
  incomeOut,
});

export { rootReducer }
