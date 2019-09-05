export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCHING_DATA = 'FETCHING_DATA';
export const PLANET_FETCHED = 'PLANET_FETCHED';
export const PLANET_QUERY_FETCHED = 'PLANET_QUERY_FETCHED';
export const SAVE_QUERY_PLANET = 'SAVE_QUERY_PLANET';
export const DELETE_QUERY_PLANET = 'DELETE_QUERY_PLANET';
export const SAVE_CUSTOM_FILM = 'SAVE_CUSTOM_FILM';
export const CLEAR_QUERY_PLANET = 'CLEAR_QUERY_PLANET';
export const FETCH_ERROR = 'FETCH_ERROR';

import axios from 'axios';

const fetchingData = () => ({
  type: FETCHING_DATA
});

const fetchError = () => ({
  type: FETCH_ERROR
});

const filmsFetched = films => ({
  type: FETCH_FILMS_SUCCESS,
  films
});

const planetFetched = (planets, index) => ({
  type: PLANET_FETCHED,
  planets, index
});

const planetQueryFetched = (queryPlanets) => ({
  type: PLANET_QUERY_FETCHED,
  queryPlanets
});

export const saveQueryPlanet = (savedQueryPlanet) => ({
  type: SAVE_QUERY_PLANET,
  savedQueryPlanet
});

export const deleteQueryPlanet = (deletedQueryPlanet) => ({
  type: DELETE_QUERY_PLANET,
  deletedQueryPlanet
});

export const saveCustomFilm = (customFilm) => ({
  type: SAVE_CUSTOM_FILM,
  customFilm
});

export const clearQueryPlanets = () => ({
  type: CLEAR_QUERY_PLANET
});

const printError = (error)  => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
};

export const fetchFilms = () => (dispatch) => {
  dispatch(fetchingData());
  axios.get(`https://swapi.co/api/films/?format=json`, {headers: {"Content-Type": "application/json"}})
    .then(res => dispatch(filmsFetched(res)))
    .catch((error) => {
      printError(error);
      dispatch(fetchError())
    });
};

export const fetchPlanets = (planets, index) => (dispatch) => {
  dispatch(fetchingData());
  for(let planet of planets){
    axios.get(planet, {headers: {"Content-Type": "application/json"}})
      .then(res => dispatch(planetFetched(res, index)))
      .catch((error) => {
        printError(error);
        dispatch(fetchError())
      });
  }
};

export const searchPlanets = query => (dispatch) => {
  dispatch(fetchingData());
    axios.get(`https://swapi.co/api/plats/?search=${query}`, {headers: {"Content-Type": "application/json"}})
      .then(res => dispatch(planetQueryFetched(res.data.results)))
      .catch((error) => {
        printError(error);
        dispatch(fetchError())
      });
};

