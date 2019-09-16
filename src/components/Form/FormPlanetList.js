import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Search } from '../../assets/svg';
import { withRedux } from '../../redux/wrapper';
import classNames from 'classnames';

const FormPlanetList = ({ queryPlanets, onFetchPlanetsQuery, onSaveQueryPlanet, onClearQueryPlanets }) => {
  const [planetQuery, setPlanetQuery] = useState('');
  const [searchHasFocus, setSearchHasFocus] = useState(false);

  function savePlanet(planet) {
    onSaveQueryPlanet(planet);
    setPlanetQuery('');
  }

  function handleChange(e) {
    setPlanetQuery(e.target.value);
    planetQuery.length > 1 ? onFetchPlanetsQuery(planetQuery) : onClearQueryPlanets();
  }

  function handleSearchFocus() {
    setTimeout(() => setSearchHasFocus(!searchHasFocus), 100);
  }

  const formInputCLass = classNames({
    'form__planet-section__input-section': true,
    'form__planet-section__input-section--focus': searchHasFocus,
  });

  return (
    <>
      <label className={'form__label'}>Add planet</label>
      <div className={formInputCLass}>
        <input
          autoComplete="off"
          onBlur={() => handleSearchFocus()}
          onFocus={() => handleSearchFocus()}
          name={'planetQuery'}
          className={'form__input--planet'}
          type={'text'}
          placeholder={'Search for the planet in the database'}
          value={planetQuery}
          onChange={e => handleChange(e)}
        />
        <Search />
      </div>
      <div className={`col-12 form__info-section`}>
        {queryPlanets.length > 0 && searchHasFocus && (
          <ul className={'form__planet-list'}>
            {queryPlanets.map(singlePlanet => (
              <li onClick={() => savePlanet(singlePlanet)} key={singlePlanet.name} className={'form__planet-list__item'}>
                {singlePlanet.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

FormPlanetList.propTypes = {
  queryPlanets: PropTypes.array,
  onFetchPlanetsQuery: PropTypes.func,
  onSaveQueryPlanet: PropTypes.func,
  onClearQueryPlanets: PropTypes.func,
};

const connectedComponent = withRedux(FormPlanetList);
export { connectedComponent as FormPlanetList };
