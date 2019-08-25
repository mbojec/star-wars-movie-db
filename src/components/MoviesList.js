import React, { Component } from 'react';
import {MoviesListItem} from "./MoviesListItem";
import PropTypes from 'prop-types';
import {withRedux} from "../redux/wrapper";

class MoviesList extends Component {
  render () {
    return (
        <ul className={'list'}>
          {this.props.films.map((singleMovie) => {
            return (
              <li className={'list__item'} key={singleMovie.episode_id}>
                <MoviesListItem title={singleMovie.title} />
              </li>
            )
          })}
        </ul>
    )
  }
}
MoviesList.propTypes = {
  films: PropTypes.array,
};

const connectedComponent = withRedux(MoviesList);
export {connectedComponent as MoviesList}