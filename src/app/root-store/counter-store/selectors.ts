import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {Names} from './names';
import {Counter} from '@models/vo/counter';

const getValue = (state: Counter): number => state.value;

export const selectState: MemoizedSelector<object, Counter> = createFeatureSelector<Counter>(Names.NAME);

export const selectValue: MemoizedSelector<object, number> = createSelector(
  selectState,
  getValue
);
