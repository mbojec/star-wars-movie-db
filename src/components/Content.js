import React, { Component } from 'react';
import {ArrowOpen, Loader} from "../assets/svg";

export class Content extends Component{

  render() {
    return(
      <div className={'content'}>
        <section className={'content__section content__section__loader'}>
          <Loader/>
        </section>
        <hr className={'content__divider'}/>
        <section className={'content__section'}>
          <div className={'content__card content__card--closed'}><p className={'content__card__title'}>Add</p><ArrowOpen/></div>
        </section>
      </div>
    )
  }
}