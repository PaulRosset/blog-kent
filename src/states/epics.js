import { map, mapTo } from "rxjs/operators";
import { ofType } from "redux-observable";
import { GETBLOGPOSTS$ } from "./statesActions";
import { getBlogPosts } from "./actions";

export const getterEpics = (action$, store) => {
  action$.ofType(GETBLOGPOSTS$).map(post => getBlogPosts(post.node));
};
