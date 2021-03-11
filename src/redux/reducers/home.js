import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({
  isLoading: false,
  imagesCarousel: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 2,
    },
  ],
  error: {},
});

export const { Types, Creators } = createActions({
  carouselRequest: ["data"],
  carouselSucess: ["data"],
  carouselError: ["data"],
});

const request = (state = INITIAL_STATE) => state.merge({ isLoading: true, error: {} });

const success = (state = INITIAL_STATE, { data }) => state.merge({ users: data });

export default createReducer(INITIAL_STATE, {
  [Types.CAROUSEL_REQUEST]: request,
  [Types.CAROUSEL_SUCESS]: success,
  [Types.CAROUSEL_ERROR]: request,
});
