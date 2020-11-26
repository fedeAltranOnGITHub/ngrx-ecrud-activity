import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterStoreActions, RootStoreState} from '@root-store/index';
import {Observable} from "rxjs";
import {increment, decrement, reset} from "@root-store/counter-store/actions";
import {Counter} from "@models/vo/counter";

@Component({
  selector: 'app-counter-main',
  templateUrl: 'counter-main.component.html',
  styles: []
})
export class CounterMainComponent implements OnInit {

  count$: Observable<Counter>;

  //actions: Actions<Coin> = CounterStoreActions.actions;

  constructor(private readonly store$: Store<RootStoreState.State>) {
    this.count$ = store$.select('counter');
  }

  ngOnInit(): void {
  }

  increment() {
    this.store$.dispatch(increment());
  }

  decrement() {
    this.store$.dispatch(decrement());
  }

  reset() {
    this.store$.dispatch(reset());
  }

}
