export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCHING_FILMS = 'FETCHING_FILMS';
export const PLANET_FETCHED = 'PLANET_FETCHED';

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

export const fetchFilms = () => (dispatch) => {
  dispatch(fetchingFilms());
  axios.get(`https://swapi.co/api/films/?format=json`, {headers: {"Content-Type": "application/json"}})
    .then(res => dispatch(filmsFetched(res)));
};

export const fetchPlanets = (planets, index) => (dispatch) => {
  for(let planet of planets){
    console.log(planet);
    axios.get(planet, {headers: {"Content-Type": "application/json"}})
      .then(res => dispatch(planetFetched(res, index)));
  }
};