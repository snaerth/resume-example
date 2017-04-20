import {combineReducers} from 'redux';
import commonReducer from './common/reducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  common: commonReducer,
  routing: routerReducer,
});

export default rootReducer;
