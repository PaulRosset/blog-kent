import { GETBLOGPOSTS } from "./statesActions";

export const getBlogPosts = posts => ({
  type: GETBLOGPOSTS,
  payload: posts,
});
