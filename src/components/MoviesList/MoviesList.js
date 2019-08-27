import React, { Component } from 'react';
import {MoviesListItem} from "./MoviesListItem";
import PropTypes from 'prop-types';
import {withRedux} from "../../redux/wrapper";

class MoviesList extends Component {

  onClick = index =>{
    this.props.onFetchPlanet(this.props.films[index].planets, index)
  };

  render () {
    const filmsArray = [...this.props.films, ...this.props.customFilms];
    return (
        <ul className={'list'}>
          {filmsArray.map((singleMovie, index) => {
            return (
              <li className={'list__item'} key={singleMovie.title}>
                <MoviesListItem title={singleMovie.title} planets={singleMovie.planetsDetail} index={index} onPress={(index) => this.onClick(index)}/>
              </li>
            )
          })}
        </ul>
    )
  }
}
MoviesList.propTypes = {
  films: PropTypes.array,
  customFilms: PropTypes.array,
  onFetchPlanet: PropTypes.func,
};

const connectedComponent = withRedux(MoviesList);
export {connectedComponent as MoviesList}