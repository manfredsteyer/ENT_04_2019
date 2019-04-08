import { FlightsLoaded, LoadFlights } from './../+state/flight-booking.actions';
import { Observable } from 'rxjs';
import { AppState } from './../../+state/index';
import {Component, OnInit} from '@angular/core';

import {FlightService, Flight} from '@flight-workspace/flight-api';
import { Store } from '@ngrx/store';
import { FlightBookingAppState } from '../+state/flight-booking.reducer';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  // Deprecated by Manfred
  get flights() { 
    return [];
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  flights$: Observable<Flight[]>;

  constructor(
    private store: Store<FlightBookingAppState>) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(s => s.flightBooking.flights);
  }

  search(): void {
    if (!this.from || !this.to) return;
    this.store.dispatch(new LoadFlights({from: this.from, to: this.to, urgent: this.urgent}));
  }

  delay(): void {
    //this.flightService.delay();

    // TODO: Dispatch Action for delaying flight
  }

}
