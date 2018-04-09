import { GETBLOGPOSTS, SORTBY, SORTBYDIPLOMAS } from "./statesActions";

export const managerPanel = (state = [], actions) => {
  switch (actions.type) {
    case GETBLOGPOSTS:
      return [...actions.payload];
    case SORTBY:
      return [...actions.payload];
    case SORTBYDIPLOMAS:
      return [...actions.payload];
    default:
      return state;
  }
};
