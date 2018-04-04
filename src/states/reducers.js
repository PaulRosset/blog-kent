import { GETBLOGPOSTS } from "./statesActions";

export const getter = (states = [], actions) => {
  switch (actions.type) {
    case GETBLOGPOSTS:
      return [...states, ...actions.payload];
    default:
      return states;
  }
};
