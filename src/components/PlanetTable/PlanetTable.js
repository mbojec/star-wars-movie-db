import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PlanetRow } from './PlanetRow';
import { PlanetTableHeader } from './PlanetTableHeader';
import { table, sortAsc, sortDesc } from './TableProperties';

const PlanetsTable = props => {
  const [planets, setPlanets] = useState([]);
  const [sortedByHighest, setSortedByHighest] = useState(false);
  const [sortedCategory, setSortedCategory] = useState('');

  function sortBy(key) {
    let arrayCopy = [...props.planets];
    sortedByHighest ? arrayCopy.sort(sortAsc(key)) : arrayCopy.sort(sortDesc(key));
    setPlanets(arrayCopy);
    setSortedByHighest(!sortedByHighest);
    setSortedCategory(key);
  }

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
                onPress={key => sortBy(key)}
                sortedCategory={sortedCategory}
                sortedByHighest={sortedByHighest}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.length === 0
            ? props.planets.map((planet, index) => <PlanetRow key={index} planet={planet} />)
            : planets.map((planet, index) => <PlanetRow key={index} planet={planet} />)}
        </tbody>
      </table>
    </div>
  );
};

PlanetsTable.propTypes = {
  index: PropTypes.number,
  planets: PropTypes.array,
};

export { PlanetsTable };
