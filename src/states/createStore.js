import { createStore, combineReducers, applyMiddleware } from "redux";
import { getter } from "./reducers";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { getterEpics } from "./epics";
import { composeWithDevTools } from "redux-devtools-extension";

const epics = combineEpics({
  getterEpics,
});

const reducers = combineReducers({
  getter,
});

const epicMiddleware = createEpicMiddleware(epics);

export default () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(epicMiddleware)));
