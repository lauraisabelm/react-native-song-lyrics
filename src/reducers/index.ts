// REDUX
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import lyrics from './lyrics';

const State = combineReducers({
  form: formReducer,
  lyrics,
});

export default State;
