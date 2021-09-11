import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

export default combineReducers({
   auth: authReducer,
   // reducer of redux-form, that's all we have to do
   form: formReducer,
   streams: streamsReducer
});