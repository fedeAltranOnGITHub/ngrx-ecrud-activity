import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {State} from '@root-store/state';
import {environment} from '../../environments/environment';
import {Auth} from "@models/vo/auth";
import {localStorageSync} from "ngrx-store-localstorage";
import {INJECTION_TOKEN} from "@root-store/auth-store/auth-store.module";


export interface AppState {
}

// export const reducers: ActionReducerMap<AppState> = {};
//
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const reducers: ActionReducerMap<AppState> = { } ;

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({rehydrate: true, keys: ['auth']})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
