import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import Immutable from "seamless-immutable";

import { loggerNext } from "../middlewares/loggerNext";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const isNotProduction = process.env.NODE_ENV !== "production";

const bindMiddleware = (middleware) => {
  if (isNotProduction) {
    const { composeWithDevTools } = require("redux-devtools-extension");

    return composeWithDevTools(applyMiddleware(...[middleware, loggerNext]));
  }
  return applyMiddleware(...middleware);
};

function hydrate(state, action) {
  if (action.type === HYDRATE) {
    return Immutable({ ...state, ...action.payload });
  }

  return rootReducer(state, action);
}

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(hydrate, bindMiddleware(sagaMiddleware));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
