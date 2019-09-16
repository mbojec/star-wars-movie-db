import React from 'react';
import PropTypes from 'prop-types';
import { Sort } from '../../assets/svg';
import classNames from 'classnames';

const PlanetTableHeader = ({ label, keyValue, onPress, sortedByHighest, sortedCategory }) => {
  function handleClick() {
    onPress(keyValue);
  }

  const headerContainerClass = classNames({
    'table__header-container': true,
    'table__header-container--planet': keyValue === 'name',
  });

  const headerClass = classNames({
    'table__planet-name': keyValue === 'name',
    table__header: !(keyValue === 'name'),
  });

  const headerIconClass = classNames({
    table__header__icon: true,
    'table__header__icon__selected--highest': sortedCategory === keyValue && sortedByHighest,
    'table__header__icon__selected--lowest': sortedCategory === keyValue && !sortedByHighest,
  });

  return (
    <th className={headerClass}>
      <div className={headerContainerClass}>
        <p className={'table__header__label'}>{label}</p>
        <span className={headerIconClass} onClick={() => handleClick()}>
          <Sort />
        </span>
      </div>
    </th>
  );
};

PlanetTableHeader.propTypes = {
  label: PropTypes.string,
  keyValue: PropTypes.string,
  onPress: PropTypes.func,
  sortedByHighest: PropTypes.bool,
  sortedCategory: PropTypes.string,
};

export { PlanetTableHeader };
