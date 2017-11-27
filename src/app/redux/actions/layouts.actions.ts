import {Action} from '@ngrx/store';

export const SET_MODE_SIDENAV = '[Layouts] SetModeSidenav';
export const SET_SIDENAV = '[Layouts] SetSidenav';


export class SetModeSidenav implements Action {
  readonly type = SET_MODE_SIDENAV;

  constructor(public payload: string) {}
}

export class SetSidenav implements Action {
  readonly type = SET_SIDENAV;

  constructor(public payload: boolean) {}

}

export type All
  = SetModeSidenav
  | SetSidenav;
