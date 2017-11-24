import {ActionReducerMap} from '@ngrx/store';
import * as fromSepsis from '../lazy-loaded/sepsis/redux/reducers/index';

export interface State {}

export const reducers: ActionReducerMap<{}> = {
  sepsis: fromSepsis.reducers
};
