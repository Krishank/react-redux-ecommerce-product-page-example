import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import productsReducer from "./reducers/productsReducer"

const store = createStore(
  combineReducers({productsReducer}),
  {},
  applyMiddleware(logger, thunk, promise())
);

export default store;
