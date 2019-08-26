import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchFilms, fetchPlanets, searchPlanets} from "./actions";

export function withRedux(WrappedComponent) {
  class withReduxComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onFetch: () => dispatch(fetchFilms()),
      onFetchPlanet: (planets, index) => dispatch(fetchPlanets(planets, index)),
      onFetchPlanetsQuery: (query) => dispatch(searchPlanets(query))
    }
  };

  const mapStateToProps = state => {
    return {
      films: state.films,
      queryPlanets: state.queryPlanets
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(withReduxComponent)
}
