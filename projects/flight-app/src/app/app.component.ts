import {Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './+state';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<AppState>) { 

    const counter$ = store.select(s => s.counter);
    
    counter$.subscribe(value => {
      console.debug('value', value)
    });

    store.dispatch({ type: 'inc'});
    store.dispatch({ type: 'inc'});
    store.dispatch({ type: 'inc'});
    store.dispatch({ type: 'dec'});


  }
}

