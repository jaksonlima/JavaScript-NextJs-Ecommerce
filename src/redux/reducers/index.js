import { combineReducers } from "redux";

import home from "./home";
import global from "./global";

const reducers = combineReducers({
  global,
  home,
});

export default reducers;
