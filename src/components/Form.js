import React, { Component } from 'react';
import {Search, Delete} from '../assets/svg'
import {withRedux} from "../redux/wrapper";
import PropTypes from 'prop-types';

class Form extends Component{

  state = {
    title: '',
    planetQuery: '',
    validTitleLength: true,
    validTitleUpperCase: true,
    searchHasFocus: false,
    titleHasFocus: false
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
      planetsDetail: this.props.savedQueryPlanets
    };
    this.props.onSaveCustomFilm(customFilm);
  }

  savePlanet(planet){
    this.props.onSaveQueryPlanet(planet);
    this.setState({
      planetQuery: '',
    });
  }

  deletePlanet(planet){
    this.props.onDeleteQueryPlanet(planet);
  }

  handleSearchFocus(){
    setTimeout(() => this.setState({
      searchHasFocus: !this.state.searchHasFocus
    }), 100);
  }

  handleTitleFocus(){
    this.setState({ titleHasFocus: !this.state.titleHasFocus})
  }

  setErrorMessage(){
    if(!this.state.validTitleLength && !this.state.validTitleUpperCase){
      return 'Movie title name must start with a capital letter and be at least 3 letter long'
    } else if(!this.state.validTitleLength && this.state.validTitleUpperCase){
      return 'Movie title name must be at least 3 letter long'
    } else {
      return 'Movie title name must start with a capital letter'
    }
  }

  render() {
    return(
      <>
        <div className={'row form-container'}>
          <div className={'col-12'}>
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className={'row'}>
                <div className={`col-12 form__title-section`}>
                  <label className={'form__label'}>Movie title</label>
                  <input autoComplete="off" onBlur={() => {this.handleTitleValidation(); this.handleTitleFocus()}} onFocus={() => this.handleTitleFocus()} name={'title'} className={`form__input ${this.state.titleHasFocus && 'form__input--focus'}`} type={'text'} placeholder={'Please enter the title of the movie'} value={this.state.title} onChange={e => this.handleChange(e)}/>
                  <div className={'col-12 form__info-section'}>
                    {this.state.validTitleLength && this.state.validTitleUpperCase? null :<div className={'form__info-container'}><p className={'form__info-container__error-message'}>{this.setErrorMessage()}</p></div> }
                  </div>
                </div>
                <div className={'col-12 form__save-list-section'}>
                  {this.props.savedQueryPlanets.length > 0 && <div className={'row'}>{this.props.savedQueryPlanets.map((singlePlanet) => <div key={singlePlanet.name} className={'col-6 col-sm-4 col-md-3  form__save-list-section__planet-container'}><div className={'form__save-list-section__planet'}><p>{singlePlanet.name}</p><span onClick={() => this.deletePlanet(singlePlanet)}><Delete/></span></div></div>)}</div>}
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
  onDeleteQueryPlanet: PropTypes.func,
  onSaveCustomFilm: PropTypes.func
};

const connectedComponent = withRedux(Form);
export {connectedComponent as Form};