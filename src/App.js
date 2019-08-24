import React, { Component } from 'react';
import {Copyright} from "./assets/svg";
import {Header, Content} from "./components";
import { connect } from 'react-redux';
import {fetchFilms} from "./redux/actions";

class App extends Component{

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
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


const mapDispatchToProps = dispatch => {
  return {
    onFetch: () => dispatch(fetchFilms())
  }
};

const connectedComponent = connect(null, mapDispatchToProps) (App);
export {connectedComponent as App}