import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

import { THEMES } from "../../utils/constants";

const INITIAL_STATE = Immutable({
  theme: THEMES.LIGHT,
});

export const { Types, Creators } = createActions({
  themeSuccess: ["data"],
});

const success = (state = INITIAL_STATE, { data }) => state.merge(data);

export default createReducer(INITIAL_STATE, {
  [Types.THEME_SUCCESS]: success,
});
