import { GETBLOGPOSTS } from "./statesActions";

export const getter = (state = [], actions) => {
  switch (actions.type) {
    case GETBLOGPOSTS:
      console.log("polo");
      return [...state, ...actions.payload];
    default:
      return state;
  }
};
