import { map, mapTo, mergeMap, switchMap } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { ofType } from "redux-observable";
import { GETBLOGPOSTS$ } from "./statesActions";
import { getBlogPosts } from "./actions";

export const getterEpics = (action$, store) =>
  action$.ofType(GETBLOGPOSTS$).switchMap(action =>
    Observable.of(action.payload).concatMap(payload => {
      return Observable.of(
        payload.map(value => ({
          frontmatter: { ...value.node.frontmatter },
          excerpt: value.node.excerpt,
        }))
      ).map(polo => getBlogPosts(polo));
    })
  );
