import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers'

export default function () {
    const reducer = combineReducers(reducers);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, {}, composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware()
        )
    ));
    return store;
}
