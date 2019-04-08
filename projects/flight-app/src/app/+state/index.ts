import { FlightBookingState } from './../flight-booking/+state/flight-booking.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {
  // currentUser
  counter: number;
}

export function counterReducer(counter: number = 0, action: Action) {
  // TODO: Action müsste typisiert werden

  switch(action.type) {
    case "inc": return counter + 1;
    case "dec": return counter - 1;
    default: return counter;
  }

}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
