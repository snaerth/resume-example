import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer, 
        initialState,
        compose(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f));
    return store;
}