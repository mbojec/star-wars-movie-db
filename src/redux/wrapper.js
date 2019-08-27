import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchFilms, fetchPlanets, searchPlanets, saveQueryPlanet, deleteQueryPlanet, saveCustomFilm} from "./actions";

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
      onDeleteQueryPlanet: (deletedPlanet) => dispatch(deleteQueryPlanet(deletedPlanet)),
      onSaveCustomFilm: (customFilm) => dispatch(saveCustomFilm(customFilm))
    }
  };

  const mapStateToProps = state => {
    return {
      films: state.network.films,
      queryPlanets: state.local.queryPlanets,
      savedQueryPlanets: state.local.savedQueryPlanets,
      customFilms: state.local.customFilms
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(withReduxComponent)
}
