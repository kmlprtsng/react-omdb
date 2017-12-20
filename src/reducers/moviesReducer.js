import { FETCH_MOVIES } from "../actions/types";

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_MOVIES:
      if (action.payload.Error) {
        return [];
      }

      return action.payload.Search;
    default:
      return state;
  }
}
