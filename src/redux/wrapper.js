import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchFilms} from "./actions";

export function withRedux(WrappedComponent) {
  class withReduxComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onFetch: () => dispatch(fetchFilms())
    }
  };

  const mapStateToProps = state => {
    return {
      films: state.films
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(withReduxComponent)
}
