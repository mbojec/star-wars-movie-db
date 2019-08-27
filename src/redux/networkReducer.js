import {PLANET_QUERY_FETCHED, SAVE_QUERY_PLANET,  DELETE_QUERY_PLANET, FETCH_FILMS_SUCCESS, FETCHING_FILMS, PLANET_FETCHED, CLEAR_QUERY_PLANET} from "./actions";

const initialState = {
  films: [],
  isLoading: true,
  queryPlanets: [],
  savedQueryPlanets: [],
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FILMS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_FILMS_SUCCESS:{
      const filmArray = [];
      const films = action.films.data.results;
      for(let film of films){
        let newFilm = {...film, planetsDetail : []};
        filmArray.push(newFilm);
      }
      return {
        ...state,
        films: filmArray,
        isLoading: false,
      };
    }

    case PLANET_FETCHED:{
      let filmsCopy = [...state.films];
      filmsCopy[action.index].planetsDetail.push(action.planets.data);
      return {
        ...state,
        films: filmsCopy
      };
    }
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
    case CLEAR_QUERY_PLANET:{
      return {
        ...state,
        queryPlanets: [],
        savedQueryPlanets: []
      };
    }
    default:
      return state;
  }
};

export {networkReducer};