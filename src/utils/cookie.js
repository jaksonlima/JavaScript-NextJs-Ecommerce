import { Cookie } from "next-cookie";

import { COOKIE, THEMES } from "./constants";

export const get = (params) => {
  return new Cookie(params?.ctx).get(params.name) || null;
};

export const set = (params) => {
  new Cookie(params?.ctx).set(params.name, params.value, params.options || {});
};

export const remove = (params) => {
  new Cookie(params?.ctx).remove(params.name);
};

export const themeCurrentCookie = (type = THEMES.LIGHT) => {
  const themeCurrent = get({ name: COOKIE.THEME });

  if (themeCurrent && themeCurrent === type) {
    return themeCurrent;
  }

  set({ name: COOKIE.THEME, value: type });

  return type;
};
