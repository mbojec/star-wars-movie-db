import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../assets/svg';
import { MoviesList } from './MoviesList';
import { AddForm } from './Form';
import { withRedux } from '../redux/wrapper';
import classNames from 'classnames';

class Content extends Component {
  render() {
    const filmsArray = [...this.props.films, ...this.props.customFilms];

    const mainSectionClass = classNames({
      content__section: true,
      content__section__main: true,
      'content__section--center': filmsArray.length === 0,
    });

    let content;
    if (this.props.isLoadingMovieData && filmsArray.length === 0) {
      content = (
        <span className={'content__section__loader content__section__loader--main'}>
          <Loader />
        </span>
      );
    } else if (filmsArray.length === 0 && !this.props.isLoadingMovieData) {
      content = (
        <span className={'content__section__error-message content__section__error-message--main'}>
          <p>An error has occurred while fetching data</p>
        </span>
      );
    } else {
      content = <MoviesList />;
    }

    return (
      <div className={'content'}>
        <section className={mainSectionClass}>{content}</section>
        <hr className={'content__divider'} />
        <section className={'content__section'}>
          <AddForm />
        </section>
      </div>
    );
  }
}
Content.propTypes = {
  films: PropTypes.array,
  customFilms: PropTypes.array,
  isLoadingMovieData: PropTypes.bool,
};

const connectedComponent = withRedux(Content);
export { connectedComponent as Content };
