import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Copyright} from "./assets/svg";
import {Header, Content} from "./components";
// import { connect } from 'react-redux';
// import {fetchFilms} from "./redux/actions";
import {withRedux} from "./redux/wrapper";

class App extends Component{

  componentDidMount() {
    this.props.onFetch();
  }

  render() {
    return (
      <div className={'app'}>
        <header className={'app__header'}><Header/></header>
        <main className={'app__main'}><Content/></main>
        <footer className={'app__footer'}><Copyright/></footer>
      </div>
    )
  }
}
App.propTypes = {
  onFetch: PropTypes.func,
};

const connectedComponent = withRedux(App);
export {connectedComponent as App}