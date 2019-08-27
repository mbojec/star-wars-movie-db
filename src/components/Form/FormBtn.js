import React from 'react';
import PropTypes from "prop-types";

const FormBtn = ({onHandleSubmit}) => {

  function handleSubmit(event){
    onHandleSubmit(event)
  }

  return(
    <div className={'col-12 col-xs-4 col-md-3 form__submit-btn'}>
      <input type={"submit"} value={'ADD MOVIE'} onClick={event => handleSubmit(event)} onSubmit={event => handleSubmit(event)}/>
    </div>
  )

};

FormBtn.propTypes = {
  onHandleSubmit: PropTypes.func
};

export {FormBtn}