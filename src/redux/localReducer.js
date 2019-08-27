import {PLANET_QUERY_FETCHED, SAVE_QUERY_PLANET, DELETE_QUERY_PLANET, SAVE_CUSTOM_FILM} from "./actions";

const initialState = {
  queryPlanets: [],
  savedQueryPlanets: [],
  customFilms: []
};

const localReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLANET_QUERY_FETCHED:{
      return {
        ...state,
        queryPlanets: [...action.queryPlanets]
      };
    }
    case SAVE_QUERY_PLANET:{
      let savedCopy = [...state.savedQueryPlanets];
      savedCopy.push(action.savedQueryPlanet);
      return {
        ...state,
        queryPlanets: [],
        savedQueryPlanets: savedCopy
      };
    }
    case DELETE_QUERY_PLANET:{
      let savedCopy = state.savedQueryPlanets.filter(planet => planet.name !== action.deletedQueryPlanet.name);
      return {
        ...state,
        queryPlanets: [],
        savedQueryPlanets: savedCopy
      };
    }
    case SAVE_CUSTOM_FILM:{
      let savedCopy = [...state.customFilms];
      let savedFilm = {...action.customFilm, planetsDetail: [...state.savedQueryPlanets]};
      savedCopy.push(savedFilm);
      return {
        ...state,
        savedQueryPlanets: [],
        customFilms: savedCopy
      };
    }
    default:
      return state;
  }
};

export {localReducer};