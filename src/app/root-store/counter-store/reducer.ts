import {initialState} from './state';
import {createReducer, on} from '@ngrx/store';
import * as actions from './actions';
import {decrement, increment, reset} from "./actions";
import {Counter} from "@models/vo/counter";

export const featureReducer = createReducer(initialState,
  on(actions.ChangeA, (state, {valueA}) => ({...state, ...{valueA}})),
  on(actions.ChangeB, (state, {valueB}) => ({...state, ...{valueB}})),

  on(increment, (state) => {
    const c = new Counter() ;
    c.value = state.value + 1 ;
    return c ;
  }),
  on(decrement, (state) => {
    const c = new Counter() ;
    c.value = state.value - 1 ;
    return c ;
  }),
  on(reset, (state) => {
    const c = new Counter( ) ;
    c.value = 0 ;
    return c ;
  }),
);
