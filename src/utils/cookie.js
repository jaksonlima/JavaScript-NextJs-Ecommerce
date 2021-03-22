import { Cookie } from "next-cookie";

export const get = (params) => {
  return new Cookie(params?.ctx).get(params.name) || null;
};

export const set = (params) => {
  new Cookie(params?.ctx).set(params.name, params.value, params.options || {});
};

export const remove = (params) => {
  new Cookie(params?.ctx).remove(params.name);
};
