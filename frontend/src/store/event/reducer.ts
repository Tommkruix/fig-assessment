import { Reducer } from "redux";
import { EventActionTypes, EventState } from "./types";

export const initialState: EventState = {
  data: [],
  errors: undefined,
  loading: false
};
const reducer: Reducer<EventState> = (state = initialState, action) => {
  switch (action.type) {
    case EventActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case EventActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case EventActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export { reducer as EventReducer };