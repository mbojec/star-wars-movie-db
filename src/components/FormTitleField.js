import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormTitleField extends Component{

  state = {
    titleHasFocus: false
  };

  handleTitleValidation(){
    this.props.onTitleValidation();
  }

  handleTitleFocus(){
    this.setState({ titleHasFocus: !this.state.titleHasFocus})
  }

  handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    this.props.onHandleChange(key, value)
  }

  setErrorMessage(){
    if(!this.props.validTitleLength && !this.props.validTitleUpperCase){
      return 'Movie title name must start with a capital letter and be at least 3 letter long'
    } else if(!this.props.validTitleLength && this.props.validTitleUpperCase){
      return 'Movie title name must be at least 3 letter long'
    } else {
      return 'Movie title name must start with a capital letter'
    }
  }

  render() {
    return(
      <div className={`col-12 form__title-section`}>
        <label className={'form__label'}>Movie title</label>
        <input autoComplete="off" onBlur={() => {this.handleTitleValidation(); this.handleTitleFocus()}}
               onFocus={() => this.handleTitleFocus()} name={'title'}
               className={`form__input ${this.state.titleHasFocus && 'form__input--focus'}`}
               type={'text'} placeholder={'Please enter the title of the movie'}
               value={this.props.titleValue} onChange={e => this.handleChange(e)}/>
        <div className={'col-12 form__info-section'}>
          {this.props.validTitleLength && this.props.validTitleUpperCase?
            null
            :
            <div className={'form__info-container'}>
              <p className={'form__info-container__error-message'}>{this.setErrorMessage()}
              </p>
            </div> }
        </div>
      </div>
    )
  }

}

FormTitleField.propTypes = {
  onHandleChange: PropTypes.func,
  onTitleValidation: PropTypes.func,
  titleValue: PropTypes.string,
  validTitleLength: PropTypes.bool,
  validTitleUpperCase: PropTypes.bool
};

export {FormTitleField}