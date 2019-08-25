import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {PlanetRow} from "./PlanetRow";
import {Sort} from "../assets/svg";

class PlanetsTable extends Component{

  render() {
    return(
      <div className={'table'}>
        <table>
          <thead>
          <tr>
            <th className={'table__planet-name'}>Planet name</th>
            <th className={'table__header'}><p className={'table__header__label'}>Rotation period</p><span className={'table__header__icon'}><Sort/></span></th>
            <th className={'table__header'}><p className={'table__header__label'}>Orbital period</p><span className={'table__header__icon'}><Sort/></span></th>
            <th className={'table__header'}><p className={'table__header__label'}>Diameter</p><span className={'table__header__icon'}><Sort/></span></th>
            <th className={'table__header'}><p className={'table__header__label'}>Climate</p><span className={'table__header__icon'}><Sort/></span></th>
            <th className={'table__header'}><p className={'table__header__label'}>Surface water</p><span className={'table__header__icon'}><Sort/></span></th>
            <th className={'table__header'}><p className={'table__header__label'}>Population</p><span className={'table__header__icon'}><Sort/></span></th>
          </tr>
          </thead>
          <tbody>
          {this.props.planets.map((planet, index) => <PlanetRow key={index} planet={planet}/> )}
          </tbody>
        </table>
      </div>
    )
  }
}

PlanetsTable.propTypes = {
  index: PropTypes.number,
  planets: PropTypes.array,
};


export {PlanetsTable}