import { GETBLOGPOSTS, GETBLOGPOSTS$, SORTBY, SORTBY$ } from "./statesActions";

export const getBlogPosts = posts => ({
  type: GETBLOGPOSTS,
  payload: posts,
});

export const getBlogPosts$ = posts => ({
  type: GETBLOGPOSTS$,
  payload: posts,
});

export const sortBy = param => ({
  type: SORTBY,
  payload: posts,
});

export const sortBy$ = param => ({
  type: SORTBY$,
  payload: posts,
});
