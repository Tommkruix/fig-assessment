export interface Event {
  _id: string;
  title: string;
  address: string;
  description: string;
  category: string;
  isVirtual: boolean;
  date: Date;
}
export enum EventActionTypes {
  FETCH_REQUEST = "@@event/FETCH_REQUEST",
  FETCH_SUCCESS = "@@event/FETCH_SUCCESS",
  FETCH_ERROR = "@@event/FETCH_ERROR"
}
export interface EventState {
  readonly loading: boolean;
  readonly data: Event[];
  readonly errors?: string;
}