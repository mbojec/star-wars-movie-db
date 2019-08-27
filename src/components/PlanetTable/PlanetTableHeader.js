import React from 'react';
import PropTypes from 'prop-types';
import {Sort} from "../../assets/svg";

const PlanetTableHeader = ({label, keyValue, onPress, sortedByHighest, sortedCategory}) => {

  function handleClick() {
    onPress(keyValue);
  }
  return(
    <th className={`${keyValue === 'name'? 'table__planet-name' : 'table__header'}`}>
      <div className={`${keyValue === 'name'? 'table__header-container--planet' : 'table__header-container'}`}>
        <p className={'table__header__label'}>{label}</p>
        <span className={`table__header__icon 
          ${sortedCategory===keyValue &&
        (sortedByHighest? 'table__header__icon__selected--highest':'table__header__icon__selected--lowest')}`}
              onClick={() => handleClick()}><Sort/>
          </span>
      </div>
    </th>
  )
};

PlanetTableHeader.propTypes = {
  label: PropTypes.string,
  keyValue: PropTypes.string,
  onPress: PropTypes.func,
  sortedByHighest: PropTypes.bool,
  sortedCategory: PropTypes.string
};

export {PlanetTableHeader}

