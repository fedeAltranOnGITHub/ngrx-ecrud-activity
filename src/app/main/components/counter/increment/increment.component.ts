import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Counter} from "@models/vo/counter";
import {Store} from "@ngrx/store";
import {RootStoreState} from "@root-store/index";
import {increment, decrement, reset} from "@root-store/counter-store/actions";

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  // styleUrls: ['./increment.component.scss']
  styles: [``]
})
export class IncrementComponent implements OnInit {

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
}
