import { takeLatest, call, select, put } from "redux-saga/effects";
import axios from "axios";

import { Types, Creators } from "../../reducers/product";

function* product() {
  try {
    const response = yield call(() => axios.get("http://localhost:3001/products"));

    yield put(Creators.productSuccess({ products: response.data }));
    yield put(Creators.productError({ error: "error" }));
  } catch (error) {
    yield put(Creators.productError({ error }));
  }
}

export default function* watch() {
  yield takeLatest(Types.PRODUCT_REQUEST, product);
}
