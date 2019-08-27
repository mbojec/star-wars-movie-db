import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Loader} from "../assets/svg";
import {MoviesList} from "./MoviesList";
import {AddForm} from "./Form";
import {withRedux} from "../redux/wrapper";

class Content extends Component{

  render() {
    const filmsArray = [...this.props.films, ...this.props.customFilms];
    return(
      <div className={'content'}>
        <section className={`content__section content__section__loader ${filmsArray.length === 0 && 'content__section--center'}`}>
          {filmsArray.length === 0? <Loader/> : <MoviesList/>}
        </section>
        <hr className={'content__divider'}/>
        <section className={'content__section'}>
          <AddForm/>
        </section>
      </div>
    )
  }
}
Content.propTypes = {
  films: PropTypes.array,
  customFilms: PropTypes.array,
};

const connectedComponent = withRedux(Content);
export {connectedComponent as Content}