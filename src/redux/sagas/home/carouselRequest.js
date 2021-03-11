import { takeLatest, call, select, put } from "redux-saga/effects";
import axios from "axios";

import { Types, Creators } from "../../reducers/home";

function* carousel() {
  const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");

  // console.log(response.data);

  const state = yield select((state) => state);

  // console.log(state);

  yield put(Creators.carouselSucess(response.data));
}

export default function* watch() {
  yield takeLatest(Types.CAROUSEL_REQUEST, carousel);
}
