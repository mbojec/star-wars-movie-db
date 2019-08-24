import React, { Component } from 'react';
import {Logo} from "./assets/svg/Logo";
import {Copyright} from "./assets/svg/Copyright";

export class App extends Component{
  render() {
    return (
      <div className={'app'}>
        <header className={'app__header'}><Logo/></header>
        <main className={'app__main'}></main>
        <footer className={'app__footer'}><Copyright/></footer>
      </div>
    )
  }
}