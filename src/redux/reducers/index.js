import { combineReducers } from "redux";

import global from "./global";
import product from "./product";

const reducers = combineReducers({
  global,
  product,
});

export default reducers;
