import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Counter} from "@models/vo/counter";
import {Store} from "@ngrx/store";
import {RootStoreState} from "@root-store/index";
import {increment, decrement, reset} from "@root-store/counter-store/actions";

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  // styleUrls: ['./decrement.component.scss']
  styles: [``]
})
export class DecrementComponent implements OnInit {

  count$: Observable<Counter>;

  //actions: Actions<Coin> = CounterStoreActions.actions;

  constructor(private readonly store$: Store<RootStoreState.State>) {
    this.count$ = store$.select('counter');
  }


  ngOnInit(): void {
  }

  decrement() {
    this.store$.dispatch(decrement());
  }
}
