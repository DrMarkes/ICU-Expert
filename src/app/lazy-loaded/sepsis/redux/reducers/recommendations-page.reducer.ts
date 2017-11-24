import * as RecommendationsPageActions from '../actions/recommendations-page.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  errorMessage: string;
  content: any;
}

const initialState: State = {
  loaded: false,
  loading: false,
  errorMessage: null,
  content: null
};

export function reducer(state: State = initialState, action: RecommendationsPageActions.All) {
  switch (action.type) {
    case RecommendationsPageActions.LOAD_PAGE:
      return { ...state, loading: true };
    case RecommendationsPageActions.LOAD_SUCCESS:
      return { ...state, loaded: true, loading: false, content: action.payload };
    case RecommendationsPageActions.LOAD_FAIL:
      return { ...state, loading: false, loaded: false, errorMessage: action.payload };
    default:
      return state;
  }
}
