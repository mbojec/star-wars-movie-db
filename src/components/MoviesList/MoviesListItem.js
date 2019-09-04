import React, { Component } from 'react';
import {ArrowOpen, Loader} from "../../assets/svg";
import PropTypes from 'prop-types';
import {PlanetsTable} from "../PlanetTable";


class MoviesListItem extends Component {

  state = {
    opened: false
  };

  onCollapse(){
    const {index, planets} = this.props;
    this.setState({opened: !this.state.opened});
    if(planets.length === 0){
      this.props.onPress(index);
    }
  }

  render () {
    return (
      <div
        className={`card ${this.state.opened && 'card--opened'}`} >
        <div className={'card__title'}>
          <p>
            {this.props.title}
          </p>
          <div className={'card__icon'} onClick={() => this.onCollapse()}><ArrowOpen/></div>
        </div>
        <div className={'card__inner'}>
          <div className={'card__inner__content'}>
            {this.props.planets.length === 0? <span className={'card__inner__content__loader'}><Loader/></span>: <PlanetsTable index={this.props.index} planets={this.props.planets}/>}
          </div>
        </div>
      </div>
    )
  }
}

MoviesListItem.propTypes = {
  title: PropTypes.string,
  planets: PropTypes.array,
  index: PropTypes.number,
  onPress: PropTypes.func
};

export {MoviesListItem};