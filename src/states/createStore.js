import { createStore, combineReducers, applyMiddleware } from "redux";
import { getter } from "./reducers";
import { createEpicMiddleware } from "redux-observable";
import { getterEpics } from "./epics";
import { composeWithDevTools } from "redux-devtools-extension";

// const epicMiddleware = createEpicMiddleware({
//   getterEpics,
// });

const groupedReducers = combineReducers({
  getter,
});

export default () =>
  createStore(groupedReducers, composeWithDevTools(applyMiddleware()));
