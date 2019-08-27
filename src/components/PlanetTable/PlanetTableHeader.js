import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Sort} from "../../assets/svg";

class PlanetTableHeader extends Component{

  handleClick(){
    this.props.onPress(this.props.keyValue);
  }

  render() {
    return(
      <th className={`${this.props.keyValue === 'name'? 'table__planet-name' : 'table__header'}`}>
        <div className={`${this.props.keyValue === 'name'? 'table__header-container--planet' : 'table__header-container'}`}>
          <p className={'table__header__label'}>{this.props.label}</p>
          <span className={`table__header__icon 
          ${this.props.sortedCategory===this.props.keyValue && 
          (this.props.sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`}
                onClick={() => this.handleClick()}><Sort/>
          </span>
        </div>
      </th>
    )
  }
}

PlanetTableHeader.propTypes = {
  label: PropTypes.string,
  keyValue: PropTypes.string,
  onPress: PropTypes.func,
  sortedByHighest: PropTypes.bool,
  sortedCategory: PropTypes.string
};

export {PlanetTableHeader}

