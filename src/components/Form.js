import React, { Component } from 'react';
import {Search} from '../assets/svg'
import {withRedux} from "../redux/wrapper";
import PropTypes from 'prop-types';
import {FormTitleField} from "./FormTitleField";
import {FormSavedPlanetsList} from "./FormSavedPlanetsList";

class Form extends Component{

  state = {
    title: '',
    planetQuery: '',
    validTitleLength: true,
    validTitleUpperCase: true,
    searchHasFocus: false,
  };

  handleSubmit(event){
    event.preventDefault();
    this.validateForm()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    if (e.target.name === 'planetQuery'){
      this.props.onFetchPlanetsQuery(this.state.planetQuery);
    }
  }

  handleChange2(key, value) {
    this.setState({[key]: value});
    if (key === 'planetQuery'){
      this.props.onFetchPlanetsQuery(this.state.planetQuery);
    }
  }

  handleTitleValidation(){
    if(this.state.title.length > 0){
      const titleLengthValidation = this.state.title.length >= 3;
      const titleUpperCaseValidation = /[A-Z]/.test( this.state.title[0]);
      this.setState({validTitleLength: titleLengthValidation, validTitleUpperCase: titleUpperCaseValidation})
    } else {
      this.setState({validTitleLength: true})
    }
  }

  validateForm(){
    const titleLengthValidation = this.state.validTitleLength && this.state.title.length >=3;
    const titleUpperCaseValidation = this.state.validTitleUpperCase;
    if(titleLengthValidation && titleUpperCaseValidation){
      this.save();
      this.setState({
        title: '',
        planet: '',
        validTitleLength: true,
        validTitleUpperCase: true,
        searchHasFocus: false
      })
    }
  }

  save(){
    const customFilm = {
      title: this.state.title,
    };
    this.props.onSaveCustomFilm(customFilm);
  }

  savePlanet(planet){
    this.props.onSaveQueryPlanet(planet);
    this.setState({
      planetQuery: '',
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
        <div className={'row form-container'}>
          <div className={'col-12'}>
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className={'row'}>
                <FormTitleField
                  onHandleChange={(key, value) => this.handleChange2(key, value)}
                  onTitleValidation={() => this.handleTitleValidation()}
                  titleValue={this.state.title}
                  validTitleLength={this.state.validTitleLength}
                  validTitleUpperCase={this.state.validTitleUpperCase}/>
                <div className={'col-12 form__save-list-section'}>
                  {this.props.savedQueryPlanets.length > 0 && <FormSavedPlanetsList/>}
                </div>
                <div className={'col-12 form__planet-section'}>
                  <label className={'form__label'}>Add planet</label>
                  <div className={`form__planet-section__input-section ${this.state.searchHasFocus && 'form__planet-section__input-section--focus'}`}>
                    <input autoComplete="off" onBlur={() => this.handleSearchFocus()} onFocus={() => this.handleSearchFocus()} name={'planetQuery'} className={'form__input--planet'} type={'text'} placeholder={'Search for the planet in the database'} value={this.state.planetQuery} onChange={e => this.handleChange(e)}/>
                    <Search/>
                  </div>
                  <div className={`col-12 form__info-section`}>
                    {this.props.queryPlanets.length > 0 && this.state.searchHasFocus && <ul className={'form__planet-list'}>{this.props.queryPlanets.map((singlePlanet)=> <li onClick={() => this.savePlanet(singlePlanet)} key={singlePlanet.name} className={'form__planet-list__item'}>{singlePlanet.name}</li>)}</ul>}
                  </div>
                </div>
              </div>
              <div className={'row form__btn-section'}>
                  <div className={'col-12 col-sm-3 form__submit-btn'}>
                    <input type={"submit"} value={'ADD MOVIE'} onClick={event => this.handleSubmit(event)} onSubmit={event => this.handleSubmit(event)}/>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}

Form.propTypes = {
  queryPlanets: PropTypes.array,
  savedQueryPlanets: PropTypes.array,
  onFetchPlanetsQuery: PropTypes.func,
  onSaveQueryPlanet: PropTypes.func,
  onSaveCustomFilm: PropTypes.func
};

const connectedComponent = withRedux(Form);
export {connectedComponent as Form};