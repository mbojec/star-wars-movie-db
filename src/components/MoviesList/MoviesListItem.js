import React, { Component } from 'react';
import {ArrowOpen, LoaderSmall} from "../../assets/svg";
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
        className={`list-item ${this.state.opened && 'list-item--opened'}`} >
        <div className={'list-item__line'}>
          <p className={'list-item__title'}>
            {this.props.title}
          </p>
          <div className={'list-item__icon'} onClick={() => this.onCollapse()}><ArrowOpen/></div>
        </div>
        <div className={'list-item__inner'}>
          <div className={'list-item__content'}>
            {this.props.planets.length === 0? <LoaderSmall/>: <PlanetsTable index={this.props.index} planets={this.props.planets}/>}
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