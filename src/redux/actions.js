export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCHING_FILMS = 'FETCHING_FILMS';
import axios from 'axios';

const fetchingFilms = () => ({
  type: FETCHING_FILMS
});

const filmsFetched = films => ({
  type: FETCH_FILMS_SUCCESS,
  films
});

export const fetchFilms = () => (dispatch) => {
  dispatch(fetchingFilms());
  axios.get(`https://swapi.co/api/films/?format=json`, {headers: {"Content-Type": "application/json"}})
    .then(res => dispatch(filmsFetched(res)));
};