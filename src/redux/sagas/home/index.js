import { all, fork } from "redux-saga/effects";

import watchCarouselRequest from "./carouselRequest";

function* homeSagas() {
  yield all([fork(watchCarouselRequest)]);
}

export default homeSagas;
