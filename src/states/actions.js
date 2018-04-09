import {
  GETBLOGPOSTS,
  GETBLOGPOSTS$,
  SORTBY,
  SORTBY$,
  SORTBYDIPLOMAS,
} from "./statesActions";

export const getBlogPosts = posts => ({
  type: GETBLOGPOSTS,
  payload: posts,
});

export const getBlogPosts$ = posts => ({
  type: GETBLOGPOSTS$,
  payload: posts,
});

export const sortBy = sortedPosts => ({
  type: SORTBY,
  payload: sortedPosts,
});

export const sortBy$ = sort => ({
  type: SORTBY$,
  sort,
});

export const sortByDiploma = sortedPosts => ({
  type: SORTBYDIPLOMAS,
  payload: sortedPosts,
});

export const sortByDiploma$ = diplomaSort => ({
  type: SORTBYDIPLOMAS,
  diplomaSort,
});
