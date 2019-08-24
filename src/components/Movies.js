import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ArrowOpen} from "../assets/svg";
import { connect } from 'react-redux';

class Movies extends Component{

  render() {
    return(
      <ul className={'content__list'}> {this.props.films.map((singleMovie) =>
        <li className={'content__card--closed content__list__item'} key={singleMovie.episode_id}>
          <p className={'content__card__title'}>{singleMovie.title}</p>
          <ArrowOpen/>
        </li>)}
      </ul>
    )
  }
}

Movies.propTypes = {
  films: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    films: state.films
  }
};

const connectedComponent = connect(mapStateToProps, null) (Movies);
export {connectedComponent as Movies}