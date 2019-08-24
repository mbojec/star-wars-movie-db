import {FETCH_FILMS_SUCCESS, FETCHING_FILMS} from "./actions";

const initialState = {
  films: [],
  isLoading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FILMS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_FILMS_SUCCESS:
      return {
        films: action.films.data.results,
        isLoading: false
      };
    default:
      return state;
  }
};

export {reducer};