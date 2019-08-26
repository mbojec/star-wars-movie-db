import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchFilms, fetchPlanets, searchPlanets, saveQueryPlanet, deleteQueryPlanet} from "./actions";

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
      onFetchPlanetsQuery: (query) => dispatch(searchPlanets(query)),
      onSaveQueryPlanet: (savedPlanet) => dispatch(saveQueryPlanet(savedPlanet)),
      onDeleteQueryPlanet: (deletedPlanet) => dispatch(deleteQueryPlanet(deletedPlanet))
    }
  };

  const mapStateToProps = state => {
    return {
      films: state.films,
      queryPlanets: state.queryPlanets,
      savedQueryPlanets: state.savedQueryPlanets
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(withReduxComponent)
}
