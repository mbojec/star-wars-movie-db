import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Content, Footer } from './components';
import { withRedux } from './redux/wrapper';

const App = props => {
  useState(() => {
    props.onFetch();
  });

  return (
    <div className={'app'}>
      <header className={'app__header'}>
        <Header />
      </header>
      <main className={'app__main'}>
        <Content />
      </main>
      <footer className={'app__footer'}>
        <Footer />
      </footer>
    </div>
  );
};
App.propTypes = {
  onFetch: PropTypes.func,
};

const connectedComponent = withRedux(App);
export { connectedComponent as App };
