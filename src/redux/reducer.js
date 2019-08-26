import {FETCH_FILMS_SUCCESS, FETCHING_FILMS, PLANET_FETCHED, PLANET_QUERY_FETCHED} from "./actions";

const initialState = {
  films: [],
  isLoading: true,
  queryPlanets: []
};

const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export {reducer};