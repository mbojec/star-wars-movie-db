import { SAVE_CUSTOM_FILM } from './actions';

const initialState = {
  customFilms: [],
};

const localReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CUSTOM_FILM: {
      let savedCopy = [...state.customFilms];
      let savedFilm = { ...action.customFilm };
      savedCopy.push(savedFilm);
      return {
        customFilms: savedCopy,
      };
    }
    default:
      return state;
  }
};

export { localReducer };
