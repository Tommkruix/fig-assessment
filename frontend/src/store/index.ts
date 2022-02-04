import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

import { EventReducer } from "./event/reducer";
import { EventState } from "./event/types";

import { RouterState } from "connected-react-router";

export interface ApplicationState {
  event: EventState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    event: EventReducer,
    router: connectRouter(history)
  });
