import React, { Component } from 'react';
import PropTypes from "prop-types";

class FormBtn extends Component{

  handleSubmit(event){
    this.props.onHandleSubmit(event)
  }

  render() {
    return(
      <div className={'col-12 col-sm-3 form__submit-btn'}>
        <input type={"submit"} value={'ADD MOVIE'} onClick={event => this.handleSubmit(event)} onSubmit={event => this.handleSubmit(event)}/>
      </div>
    )
  }
}

FormBtn.propTypes = {
  onHandleSubmit: PropTypes.func
};

export {FormBtn}