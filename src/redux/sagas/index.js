import { all, fork } from "redux-saga/effects";

import product from "../sagas/product";

function* rootSaga() {
  yield all([fork(product)]);
}

export default rootSaga;
