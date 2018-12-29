import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";


import productsReducer from "./reducers/productsReducer"


const store = createStore(
  productsReducer,
  {},
  applyMiddleware(logger)
);

export default store;
