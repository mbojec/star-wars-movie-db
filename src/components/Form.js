import React, { Component } from 'react';
import {Search} from '../assets/svg'

class Form extends Component{

  state = {
    title: '',
    planet: '',
    validTitleLength: true,
    validTitleUpperCase: true
  };

  handleSubmit(event){
    event.preventDefault();
    this.validateForm()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleTitleValidation(){
    const titleLengthValidation = this.state.title.length >= 3;
    const titleUpperCaseValidation = /[A-Z]/.test( this.state.title[0]);
    this.setState({validTitleLength: titleLengthValidation, validTitleUpperCase: titleUpperCaseValidation})
  }

  validateForm(){
    const titleValidation = this.state.validTitle;
    if(titleValidation){
      this.save();
      this.setState({
        title: '',
        planet: '',
        validTitleLength: true,
        validTitleUpperCase: true
      })
    }
  }

  save(){
    console.log('movie saved');
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
      <div className={'row form-container'}>
        <div className={'col-12'}>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className={'row'}>
              <div className={'col-12 form__title-section'}>
                <label className={'form__label'}>Movie title</label>
                <input onBlur={() => this.handleTitleValidation()} name={'title'} className={'form__input'} type={'text'} placeholder={'Please enter the title of the movie'} value={this.state.title} onChange={e => this.handleChange(e)}/>
                <div className={'col-12 form__info-section'}>
                  {this.state.validTitleLength && this.state.validTitleUpperCase? null :<div className={'form__info-container'}><p className={'form__info-container__error-message'}>{this.setErrorMessage()}</p></div> }
                </div>
              </div>
              <div className={'col-12 form__planet-section'}>
                <label className={'form__label'}>Add planet</label>
                <div className={'form__planet-section__input-section'}>
                  <input name={'planet'} className={'form__input--planet'} type={'text'} placeholder={'Search for the planet in the database'} value={this.state.planet} onChange={e => this.handleChange(e)}/>
                  <Search/>
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
    )
  }
}

export {Form}