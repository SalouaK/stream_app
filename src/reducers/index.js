import { combineReducers } from 'redux';

import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

export default combineReducers({
   auth: authReducer,
   // reducer of react-final-form, that's all we have to do
   streams: streamsReducer
});