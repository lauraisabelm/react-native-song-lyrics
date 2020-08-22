// LIBS
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// RESOURCES
import rootReducer from '../reducers';

const middlewareEnhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, undefined, composeWithDevTools(middlewareEnhancer));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
