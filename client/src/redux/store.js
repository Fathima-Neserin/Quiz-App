import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./question.reducer";
import resultReducer from "./result.reducer";

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

// create store

const store = configureStore({ reducer: rootReducer });

export default store;
