import React from 'react';
import {MoviesListItem} from "./MoviesListItem";
import PropTypes from 'prop-types';
import {withRedux} from "../../redux/wrapper";
import {Loader} from "../../assets/svg";

const MoviesList = ({films, customFilms, onFetchPlanet, isLoading}) => {

  function onClick(index){
    onFetchPlanet(films[index].planets, index)
  }

  const filmsArray = [...films, ...customFilms];
  const content = () => {
    if(isLoading){
      return <span className={'content__section__loader content__section__loader--main'}><Loader/></span>
    } else if (films.length === 0 && !isLoading){
      return (
        <span className={'content__section__error-message content__section__error-message--main'}>
          <p>An error has occurred while fetching data</p>
        </span>
      )
    } else {
      return null
    }
  };

  return (
    <>
      {content()}
      <ul className={'list'}>
        {filmsArray.map((singleMovie, index) => {
          return (
            <li className={'list__item'} key={singleMovie.title}>
              <MoviesListItem title={singleMovie.title} planets={singleMovie.planetsDetail} index={index} onPress={(index) => onClick(index)}/>
            </li>
          )
        })}
      </ul>
    </>
  )
};

MoviesList.propTypes = {
  films: PropTypes.array,
  customFilms: PropTypes.array,
  onFetchPlanet: PropTypes.func,
  isLoading: PropTypes.bool
};

const connectedComponent = withRedux(MoviesList);
export {connectedComponent as MoviesList}