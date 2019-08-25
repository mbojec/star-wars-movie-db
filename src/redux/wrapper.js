import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchFilms, fetchPlanets} from "./actions";

export function withRedux(WrappedComponent) {
  class withReduxComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onFetch: () => dispatch(fetchFilms()),
      onFetchPlanet: (planets, index) => dispatch(fetchPlanets(planets, index))
    }
  };

  const mapStateToProps = state => {
    return {
      films: state.films
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(withReduxComponent)
}
