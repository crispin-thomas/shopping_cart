import { combineReducers } from "redux";
import cartReducer from "./reducer";

const reducers = combineReducers({
  item: cartReducer,
});

export default reducers;
