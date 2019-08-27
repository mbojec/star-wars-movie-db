import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Copyright} from "./assets/svg";
import {Header, Content} from "./components";
import {withRedux} from "./redux/wrapper";
import {clearStore} from "./redux/store";

class App extends Component{

  componentDidMount() {
    this.props.onFetch();
    clearStore();
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