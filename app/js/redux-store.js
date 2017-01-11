import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers'

export default function () {
    const reducer = combineReducers(reducers);
    const store = createStore(reducer, {}, applyMiddleware(
            thunkMiddleware,
            promiseMiddleware()
    ));
    return store;
}
