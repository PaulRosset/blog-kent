import { map, mapTo, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { GETBLOGPOSTS$ } from "./statesActions";
import { getBlogPosts } from "./actions";

export const getterEpics = (action$, store) =>
  action$.mergeMap(post => {
    console.log(post);
    return post;
  });
