import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Loader} from "../assets/svg";
import {MoviesList} from "./MoviesList";
import {Add} from "./Add";
import {withRedux} from "../redux/wrapper";

class Content extends Component{

  render() {

    return(
      <div className={'content'}>
        <section className={'content__section content__section__loader'}>
          {this.props.films.length === 0? <Loader/> : <MoviesList/>}
        </section>
        <hr className={'content__divider'}/>
        <section className={'content__section'}>
          <Add/>
        </section>
      </div>
    )
  }
}
Content.propTypes = {
  films: PropTypes.array,
};

const connectedComponent = withRedux(Content);
export {connectedComponent as Content}