import {Component, NgModule, OnInit} from '@angular/core';
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

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
  }

  increment() {
    this.store$.dispatch(increment());
  }
}

// @NgModule({
//   exports: [IncrementComponent],
//   declarations: [IncrementComponent]
// })
// export class IncrementModule{ }

