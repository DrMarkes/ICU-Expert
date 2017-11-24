import { Action } from '@ngrx/store';

export const LOAD_PAGE = '[Recommendations page] Load Page';
export const LOAD_SUCCESS = '[Recommendations page] Load Success';
export const LOAD_FAIL = '[Recommendations page] Load Fail';

export class LoadPage implements Action {
  readonly type = LOAD_PAGE;

}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export type All
  = LoadPage
  | LoadSuccess
  | LoadFail;
