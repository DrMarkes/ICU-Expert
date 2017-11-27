import * as LayoutsActions from '../actions/layouts.actions';

export interface State {
  showSidenav: boolean;
  modeSidenav: string;
}

const initialState: State = {
  showSidenav: true,
  modeSidenav: 'side'
};

export function reducer(state: State = initialState, action: LayoutsActions.All) {
  switch (action.type) {
    case LayoutsActions.SET_MODE_SIDENAV:
      return { ...state, modeSidenav: action.payload };
    case LayoutsActions.SET_SIDENAV:
      return { ...state, showSidenav: action.payload };
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;

export const getModeSidenav = (state: State) => state.modeSidenav;
