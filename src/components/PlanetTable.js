import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {PlanetRow} from "./PlanetRow";
import {Sort} from "../assets/svg";

class PlanetsTable extends Component{

  state = {
    planets: [],
    sortedByHighest: false,
    sortedCategory:''
  };
  sor(key){
    return function (a, b) {
      if(key === 'name' || key === 'climate'){
        if (a[key] > b[key]) {
          return 1;
        }
        if (b[key] > a[key]) {
          return -1;
        }
        return 0;
      } else {
        return (a[key] === 'unknown'? -1:a[key]) - (b[key] === 'unknown'? -1:b[key])
      }
    }
  }
  sor2(key){
    return function (a, b) {
      if(key === 'name' || key === 'climate'){
        if (a[key] > b[key]) {
          return -1;
        }
        if (b[key] > a[key]) {
          return 1;
        }
        return 0;
      } else {
        return (b[key] === 'unknown'? 0:b[key]) - (a[key] === 'unknown'? 0:a[key])
      }
    }
  }

  sortBy(key) {
    let arrayCopy = [...this.props.planets];
    this.state.sortedByHighest? arrayCopy.sort(this.sor(key)): arrayCopy.sort(this.sor2(key));
    this.setState({planets: arrayCopy, sortedByHighest: !this.state.sortedByHighest, sortedCategory: key});
  }

  render() {

    console.log(this.state.sortedCategory);

    return(
      <div className={'table'}>
        <table>
          <thead>
          <tr>
            <th className={'table__planet-name'}><div className={'table__header-container--planet'}><p className={'table__header__label'}>Planet name</p><span className={`table__header__icon ${this.state.sortedCategory==='name' && (this.state.sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`} onClick={() => this.sortBy('name')}><Sort/></span></div></th>
            <th className={'table__header'}><div className={'table__header-container'}><p className={'table__header__label'}>Rotation period</p><span className={`table__header__icon ${this.state.sortedCategory==='rotation_period' && (this.state.sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`} onClick={() => this.sortBy('rotation_period')}><Sort/></span></div></th>
            <th className={'table__header'}><div className={'table__header-container'}><p className={'table__header__label'}>Orbital period</p><span className={`table__header__icon ${this.state.sortedCategory==='orbital_period' && (this.state.sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`} onClick={() => this.sortBy('orbital_period')}><Sort/></span></div></th>
            <th className={'table__header'}><div className={'table__header-container'}><p className={'table__header__label'}>Diameter</p><span className={`table__header__icon ${this.state.sortedCategory==='diameter' && (this.state.sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`} onClick={() => this.sortBy('diameter')}><Sort/></span></div></th>
            <th className={'table__header'}><div className={'table__header-container'}><p className={'table__header__label'}>Climate</p><span className={`table__header__icon ${this.state.sortedCategory==='climate' && (this.state.sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`} onClick={() => this.sortBy('climate')}><Sort/></span></div></th>
            <th className={'table__header'}><div className={'table__header-container'}><p className={'table__header__label'}>Surface water</p><span className={`table__header__icon ${this.state.sortedCategory==='surface_water' && (this.state.sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`} onClick={() => this.sortBy('surface_water')}><Sort/></span></div></th>
            <th className={'table__header'}><div className={'table__header-container'}><p className={'table__header__label'}>Population</p><span className={`table__header__icon ${this.state.sortedCategory==='population' && (this.state.sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`} onClick={() => this.sortBy('population')}><Sort/></span></div></th>
          </tr>
          </thead>
          <tbody>
          {this.state.planets.length === 0? this.props.planets.map((planet, index) => <PlanetRow key={index} planet={planet}/> ): this.state.planets.map((planet, index) => <PlanetRow key={index} planet={planet}/> ) }
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