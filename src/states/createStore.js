import { createStore, combineReducers, applyMiddleware } from "redux";
import { managerPanel } from "./reducers";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { getterEpics, sortEpics } from "./epics";
import { composeWithDevTools } from "redux-devtools-extension";
import "rxjs";

const epics = combineEpics(getterEpics, sortEpics);

const reducers = combineReducers({
  managerPanel,
});

const epicMiddleware = createEpicMiddleware(epics);

export default () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(epicMiddleware)));
