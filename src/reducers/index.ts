// REDUX
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

interface State {
  form: object;
}

const State = combineReducers({
  form: formReducer,
});

export default State;
