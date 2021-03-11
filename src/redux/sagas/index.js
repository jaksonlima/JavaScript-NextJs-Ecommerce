import { all, fork } from "redux-saga/effects";

import home from "./home";

function* rootSaga() {
  yield all([fork(home)]);
}

export default rootSaga;
