import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetRow extends Component{
  render() {
    const planet = this.props.planet;

    return(
      <tr>
        <td className={'table__planet-name'}>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
      </tr>
    )
  }
}

PlanetRow.propTypes = {
  planet: PropTypes.object
};


export {PlanetRow};