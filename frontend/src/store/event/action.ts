import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { EventActionTypes } from "./types";
import { ApplicationState } from "../index";

import apiHelper from '../../helpers/api.helper';

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return async (dispatch: Dispatch) => {
    try {
      const {data} = await apiHelper.fetchEvents();
      return dispatch({
        type: EventActionTypes.FETCH_SUCCESS,
        payload: data
      });
    } catch (e) {
      return dispatch({
        type: EventActionTypes.FETCH_ERROR
      });
    }
  };
};