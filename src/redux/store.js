import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer/index";
import thunk from "redux-thunk";

const cart = {};

const store = createStore(reducers, cart, applyMiddleware(thunk));

export default store;
