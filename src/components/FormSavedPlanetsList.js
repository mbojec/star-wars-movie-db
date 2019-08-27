import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Delete} from "../assets/svg";
import {withRedux} from "../redux/wrapper";

class FormSavedPlanetsList extends Component{
  deletePlanet(planet){
    this.props.onDeleteQueryPlanet(planet);
  }

  render() {
    return(
      <div className={'row'}>
        {this.props.savedQueryPlanets.map((singlePlanet) =>
          <div key={singlePlanet.name} className={'col-6 col-sm-4 col-md-3  form__save-list-section__planet-container'}>
            <div className={'form__save-list-section__planet'}>
              <p>{singlePlanet.name}</p>
              <span onClick={() => this.deletePlanet(singlePlanet)}><Delete/>
              </span>
            </div>
          </div>)}
      </div>
    )
  }
}


FormSavedPlanetsList.propTypes = {
  savedQueryPlanets: PropTypes.array,
  onDeleteQueryPlanet: PropTypes.func,
};

const connectedComponent = withRedux(FormSavedPlanetsList);
export {connectedComponent as FormSavedPlanetsList};