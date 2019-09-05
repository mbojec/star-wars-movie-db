import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Search} from "../../assets/svg";
import {withRedux} from "../../redux/wrapper";

class FormPlanetList extends Component{

  state = {
    planetQuery: '',
    searchHasFocus: false
  };

  savePlanet(planet){
    this.props.onSaveQueryPlanet(planet);
    this.setState({
      planetQuery: '',
    });
  }

  handleChange(e) {
    this.setState({planetQuery: e.target.value},() =>{
      this.state.planetQuery.length > 1 ? this.props.onFetchPlanetsQuery(this.state.planetQuery) : this.props.onClearQueryPlanets();
    });
  }

  handleSearchFocus(){
    setTimeout(() => this.setState({
      searchHasFocus: !this.state.searchHasFocus
    }), 100);
  }

  render() {
    return(
      <>
        <label className={'form__label'}>Add planet</label>
        <div className={`form__planet-section__input-section ${this.state.searchHasFocus && 'form__planet-section__input-section--focus'}`}>
          <input autoComplete="off" onBlur={() => this.handleSearchFocus()} onFocus={() => this.handleSearchFocus()}
                 name={'planetQuery'} className={'form__input--planet'} type={'text'}
                 placeholder={'Search for the planet in the database'} value={this.state.planetQuery}
                 onChange={e => this.handleChange(e)}/>
          <Search/>
        </div>
        <div className={`col-12 form__info-section`}>
          {this.props.queryPlanets.length > 0 && this.state.searchHasFocus &&
          <ul className={'form__planet-list'}>{this.props.queryPlanets.map((singlePlanet)=>
            <li onClick={() => this.savePlanet(singlePlanet)} key={singlePlanet.name} className={'form__planet-list__item'}>{singlePlanet.name}
            </li>)}
          </ul>}
        </div>
      </>
    )
  }
}

FormPlanetList.propTypes = {
  queryPlanets: PropTypes.array,
  onFetchPlanetsQuery: PropTypes.func,
  onSaveQueryPlanet: PropTypes.func,
  onClearQueryPlanets: PropTypes.func
};

const connectedComponent = withRedux(FormPlanetList);
export {connectedComponent as FormPlanetList};