import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer, 
        initialState,
        compose(
            applyMiddleware(reduxThunk), 
            typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f));
    return store;
}