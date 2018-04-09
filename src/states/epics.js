import { Observable } from "rxjs/Observable";
//import { ofType } from "redux-observable";
import { GETBLOGPOSTS$, SORTBY$ } from "./statesActions";
import { getBlogPosts, sortBy } from "./actions";

export const getterEpics = action$ =>
  action$.ofType(GETBLOGPOSTS$).switchMap(action =>
    Observable.of(action.payload).concatMap(payload => {
      return Observable.of(
        payload.map(value => ({
          frontmatter: { ...value.node.frontmatter },
          excerpt: value.node.excerpt,
        }))
      ).map(posts => getBlogPosts(posts));
    })
  );

export const sortEpics = (actions$, store) =>
  actions$
    .ofType(SORTBY$)
    .mergeMap(action =>
      Observable.of(store.getState().managerPanel).map(posts =>
        sortBy(
          posts.sort(
            (a, b) =>
              new Date(
                action.sort === "DESC" ? b.frontmatter.date : a.frontmatter.date
              ) -
              new Date(
                action.sort === "DESC" ? a.frontmatter.date : b.frontmatter.date
              )
          )
        )
      )
    );

//export const sortDiplomasEpics = (action$, store) => action$;
