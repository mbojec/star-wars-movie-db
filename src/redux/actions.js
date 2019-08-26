export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCHING_FILMS = 'FETCHING_FILMS';
export const PLANET_FETCHED = 'PLANET_FETCHED';
export const PLANET_QUERY_FETCHED = 'PLANET_QUERY_FETCHED';
export const SAVE_QUERY_PLANET = 'SAVE_QUERY_PLANET';

import axios from 'axios';

const fetchingFilms = () => ({
  type: FETCHING_FILMS
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

function handleError(error) {
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
}

export const fetchFilms = () => (dispatch) => {
  dispatch(fetchingFilms());
  axios.get(`https://swapi.co/api/films/?format=json`, {headers: {"Content-Type": "application/json"}})
    .then(res => dispatch(filmsFetched(res)))
    .catch((error) => {
      handleError(error)
    });
};

export const fetchPlanets = (planets, index) => (dispatch) => {
  for(let planet of planets){
    axios.get(planet, {headers: {"Content-Type": "application/json"}})
      .then(res => dispatch(planetFetched(res, index)))
      .catch((error) => {
        handleError(error)
      });
  }
};

export const searchPlanets = query => (dispatch) => {
    axios.get(`https://swapi.co/api/planets/?search=${query}`, {headers: {"Content-Type": "application/json"}})
      .then(res => dispatch(planetQueryFetched(res.data.results)))
      .catch((error) => {
        handleError(error)
      });
};

