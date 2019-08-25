import React, { Component } from 'react';
import {MoviesListItem} from "./MoviesListItem";
import PropTypes from 'prop-types';
import {withRedux} from "../redux/wrapper";

class MoviesList extends Component {

  onClick = index =>{
    this.props.onFetchPlanet(this.props.films[index].planets, index)
  };

  render () {
    return (
        <ul className={'list'}>
          {this.props.films.map((singleMovie, index) => {
            return (
              <li className={'list__item'} key={singleMovie.episode_id}>
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
  onFetchPlanet: PropTypes.func,
};

const connectedComponent = withRedux(MoviesList);
export {connectedComponent as MoviesList}