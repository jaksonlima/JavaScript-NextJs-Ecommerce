import { takeLatest, call, select, put } from "redux-saga/effects";
import axios from "axios";

import { Types, Creators } from "../../reducers/product";

function* product(props) {}

export default function* watch() {
  yield takeLatest(Types.PRODUCT_REQUEST, product);
}
