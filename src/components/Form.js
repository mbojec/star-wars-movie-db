import React, { Component } from 'react';
import {withRedux} from "../redux/wrapper";
import PropTypes from 'prop-types';
import {FormTitleField} from "./FormTitleField";
import {FormSavedPlanetsList} from "./FormSavedPlanetsList";
import {FormPlanetList} from "./FormPlanetList";
import {FormBtn} from "./FormBtn";

class Form extends Component{

  state = {
    title: '',
    validTitleLength: true,
    validTitleUpperCase: true,
  };

  handleSubmit(event){
    event.preventDefault();
    this.validateForm()
  }
  handleChange(key, value) {
    this.setState({[key]: value});
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

  render() {
    return(
      <>
        <div className={'row form-container'}>
          <div className={'col-12'}>
            <form onSubmit={event => this.handleSubmit(event)}>
              <div className={'row'}>
                <div className={`col-12 form__title-section`}>
                  <FormTitleField
                    onHandleChange={(key, value) => this.handleChange(key, value)}
                    onTitleValidation={() => this.handleTitleValidation()}
                    titleValue={this.state.title}
                    validTitleLength={this.state.validTitleLength}
                    validTitleUpperCase={this.state.validTitleUpperCase}/>
                </div>
                <div className={'col-12 form__save-list-section'}>
                  {this.props.savedQueryPlanets.length > 0 && <FormSavedPlanetsList/>}
                </div>
                <div className={'col-12 form__planet-section'}>
                  <FormPlanetList/>
                </div>
              </div>
              <div className={'row form__btn-section'}>
                <FormBtn onHandleSubmit={(event) => this.handleSubmit(event)}/>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}

Form.propTypes = {
  savedQueryPlanets: PropTypes.array,
  onSaveCustomFilm: PropTypes.func
};

const connectedComponent = withRedux(Form);
export {connectedComponent as Form};