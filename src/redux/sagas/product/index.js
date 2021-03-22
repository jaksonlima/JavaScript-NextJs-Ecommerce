import { all, fork } from "redux-saga/effects";

import watchProductRequest from "./productRequest";

function* productSagas() {
  yield all([fork(watchProductRequest)]);
}

export default productSagas;
