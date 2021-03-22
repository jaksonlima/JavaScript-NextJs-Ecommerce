import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({
  product: {},
});

export const { Types, Creators } = createActions({
  productRequest: ["data"],
  productSuccess: ["data"],
  productError: ["data"],
});

const success = (state = INITIAL_STATE, { data }) => state.merge(data);

export default createReducer(INITIAL_STATE, {
  [Types.PRODUCT_SUCCESS]: success,
  [Types.PRODUCT_ERROR]: success,
});
