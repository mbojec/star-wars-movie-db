import React from 'react';
import PropTypes from 'prop-types';
import { Delete } from '../../assets/svg';
import { withRedux } from '../../redux/wrapper';

const FormSavedPlanetsList = ({ savedQueryPlanets, onDeleteQueryPlanet }) => {
  function deletePlanet(planet) {
    onDeleteQueryPlanet(planet);
  }

  return (
    <div className={'row'}>
      {savedQueryPlanets.map(singlePlanet => (
        <div key={singlePlanet.name} className={'col-6 col-xs-4 col-sm-3  form__save-list-section__planet-container'}>
          <div className={'form__save-list-section__planet'}>
            <p>{singlePlanet.name}</p>
            <span onClick={() => deletePlanet(singlePlanet)} className={'form__save-list-section__planet__delete-btn'}>
              <Delete />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

FormSavedPlanetsList.propTypes = {
  savedQueryPlanets: PropTypes.array,
  onDeleteQueryPlanet: PropTypes.func,
};

const connectedComponent = withRedux(FormSavedPlanetsList);
export { connectedComponent as FormSavedPlanetsList };
