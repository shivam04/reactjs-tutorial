import cartReducer from './cart';
import categoriesReducer from './categories';
import thunk from 'redux-thunk';

import { combineReducers, createStore, applyMiddleware } from "redux";

const reducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer
});

let store = createStore(reducer, applyMiddleware(thunk));

export default store;