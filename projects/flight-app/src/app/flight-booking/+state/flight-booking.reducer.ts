import { AppState } from './../../+state/index';

import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';

import produce from 'immer';

export interface FlightBookingAppState extends AppState {
  flightBooking: FlightBookingState;
}

export interface FlightBookingState {
  flights: Flight[];
  basket: object;
  stats: object;
}

export const initialState: FlightBookingState = {
  flights: [],
  basket: {},
  stats: {}
};

export const reducer = produce((state, action: FlightBookingActions) => {
  switch (action.type) {
    case FlightBookingActionTypes.FlightsLoaded: {
      const flights = action.payload.flights;
      state.flights = flights;
      break;
    }
    case FlightBookingActionTypes.UpdateFlight: {
      const flight = action.payload.flight;
      const idx = state.flights.findIndex(f => f.id === flight.id);
      state.flights[idx] = flight;
      break;
    }
    case FlightBookingActionTypes.LoadFlights: {
      state.flights = [];
      break;
    }
  }
}, initialState);
