import React, { Component } from 'react';
import {Copyright} from "./assets/svg";
import {Header, Content} from "./components";

export class App extends Component{
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