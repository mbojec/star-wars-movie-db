import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {PlanetRow} from "./PlanetRow";

class PlanetsTable extends Component{

  render() {
    return(
      <div className={'table'}>
        <table>
          <thead>
          <tr>
            <th className={'table__planet-name'}>Planet name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Surface water</th>
            <th>Population</th>
          </tr>
          </thead>
          <tbody>
          {/* eslint-disable-next-line react/jsx-key */}
          {this.props.planets.map((planet) => <PlanetRow planet={planet}/> )}
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