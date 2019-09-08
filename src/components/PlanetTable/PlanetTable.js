import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PlanetRow } from './PlanetRow';
import { PlanetTableHeader } from './PlanetTableHeader';
import { table, sortAsc, sortDesc } from './TableProperties';

class PlanetsTable extends Component {
  state = {
    planets: [],
    sortedByHighest: false,
    sortedCategory: '',
  };

  sortBy(key) {
    let arrayCopy = [...this.props.planets];
    this.state.sortedByHighest ? arrayCopy.sort(sortAsc(key)) : arrayCopy.sort(sortDesc(key));
    this.setState({ planets: arrayCopy, sortedByHighest: !this.state.sortedByHighest, sortedCategory: key });
  }

  render() {
    return (
      <div className={'table'}>
        <table>
          <thead>
            <tr>
              {table.map(singleHeader => (
                <PlanetTableHeader
                  key={singleHeader.keyValue}
                  label={singleHeader.label}
                  keyValue={singleHeader.keyValue}
                  onPress={key => this.sortBy(key)}
                  sortedCategory={this.state.sortedCategory}
                  sortedByHighest={this.state.sortedByHighest}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.planets.length === 0
              ? this.props.planets.map((planet, index) => <PlanetRow key={index} planet={planet} />)
              : this.state.planets.map((planet, index) => <PlanetRow key={index} planet={planet} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

PlanetsTable.propTypes = {
  index: PropTypes.number,
  planets: PropTypes.array,
};

export { PlanetsTable };
