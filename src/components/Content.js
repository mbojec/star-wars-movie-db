import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ArrowOpen, Loader} from "../assets/svg";
import { connect } from 'react-redux';
import {MoviesList} from "./MoviesList";

class Content extends Component{

  render() {

    return(
      <div className={'content'}>
        <section className={'content__section content__section__loader'}>
          {this.props.films.length === 0? <Loader/> : <MoviesList/>}
        </section>
        <hr className={'content__divider'}/>
        <section className={'content__section'}>
          <div className={'content__card content__card--closed'}><p className={'content__card__title'}>Add</p><ArrowOpen/></div>
        </section>
      </div>
    )
  }
}
Content.propTypes = {
  films: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    films: state.films
  }
};

const connectedComponent = connect(mapStateToProps, null) (Content);
export {connectedComponent as Content}