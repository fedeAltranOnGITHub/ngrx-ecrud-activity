import {createAction, props} from '@ngrx/store';
// import {adapter} from './state';
// import {Names} from './names';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

// export const actions = adapter.createCrudActions(Names.NAME);
//
// export const {
//   increment,
//   decrement,
//   reset,
// } = actions;


export enum ActionTypes {
  CHANGE_A = '[Counter] Change A',
  CHANGE_B = '[Counter] Change b',
}

export const ChangeA = createAction(ActionTypes.CHANGE_A, props<{ valueA: string }>());
export const ChangeB = createAction(ActionTypes.CHANGE_B, props<{ valueB: string }>());

