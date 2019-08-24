import React, { Component } from 'react';

export class App extends Component{
  render() {
    return (
      <div className={'app'}>
        <header className={'app__header'}></header>
        <main className={'app__main'}></main>
        <footer className={'app__footer'}></footer>
      </div>
    )
  }
}