import React, { Component } from 'react';

class Form extends Component{

  state = {
    title: ''
  };

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleTitleValidation(){

  }

  render() {
    return(
      <div className={'row form-container'}>
        <div className={'col-12'}>
          <form>
            <div className={'row'}>
              <div className={'col-12 form__title-section'}>
                <label className={'form__label'}>Movie title</label>
                <input onBlur={() => this.handleTitleValidation()} name={'title'} className={'form__input'} type={'text'} placeholder={'Please enter the title of the movie'} value={this.state.title} onChange={e => this.handleChange(e)}/>
              </div>
              <div className={'col-12 form__planet-section'}>
                <label className={'form__label'}>Add planet</label>
                <input onBlur={() => this.handleTitleValidation()} name={'title'} className={'form__input'} type={'text'} placeholder={'Search for the planet in the database'} value={this.state.title} onChange={e => this.handleChange(e)}/>
              </div>
              <div className={'col-12 form__btn-section'}>
                <div className={'form__submit-btn'}>
                  <input type={"submit"} value={'ADD MOVIE'}/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export {Form}