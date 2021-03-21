import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

import { THEMES } from "../../utils/constants";

const INITIAL_STATE = Immutable({
  theme: {
    type: THEMES.DARK,
  },
});

export const { Types, Creators } = createActions({
  themeRequest: ["data"],
  themeSuccess: ["data"],
  themeError: ["data"],
});

const request = (state = INITIAL_STATE, data) => state.merge(data);
const success = (state = INITIAL_STATE, data) => state.merge(data);
const error = (state = INITIAL_STATE, data) => state.merge(data);

export default createReducer(INITIAL_STATE, {
  [Types.THEME_REQUEST]: request,
  [Types.THEME_SUCCESS]: success,
  [Types.THEME_ERROR]: error,
});
