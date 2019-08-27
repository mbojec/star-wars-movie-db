import React from 'react';
import {MoviesListItem} from "./MoviesListItem";
import PropTypes from 'prop-types';
import {withRedux} from "../../redux/wrapper";

const MoviesList = ({films, customFilms, onFetchPlanet}) => {

  function onClick(index){
    onFetchPlanet(films[index].planets, index)
  }

  const filmsArray = [...films, ...customFilms];

  return (
    <ul className={'list'}>
      {filmsArray.map((singleMovie, index) => {
        return (
          <li className={'list__item'} key={singleMovie.title}>
            <MoviesListItem title={singleMovie.title} planets={singleMovie.planetsDetail} index={index} onPress={(index) => onClick(index)}/>
          </li>
        )
      })}
    </ul>
  )
};

MoviesList.propTypes = {
  films: PropTypes.array,
  customFilms: PropTypes.array,
  onFetchPlanet: PropTypes.func,
};

const connectedComponent = withRedux(MoviesList);
export {connectedComponent as MoviesList}