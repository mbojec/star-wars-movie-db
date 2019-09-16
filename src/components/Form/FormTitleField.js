import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormTitleField = ({ onHandleChange, onTitleValidation, titleValue, validTitleLength, validTitleUpperCase }) => {
  const [titleHasFocus, setTitleHasFocus] = useState(false);

  function handleTitleValidation() {
    onTitleValidation();
  }

  function handleTitleFocus() {
    setTitleHasFocus(!titleHasFocus);
  }

  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    onHandleChange(key, value);
  }

  function setErrorMessage() {
    if (!validTitleLength && !validTitleUpperCase) {
      return 'Movie title name must start with a capital letter and be at least 3 letter long';
    } else if (!validTitleLength && validTitleUpperCase) {
      return 'Movie title name must be at least 3 letter long';
    } else {
      return 'Movie title name must start with a capital letter';
    }
  }

  const formInputCLass = classNames({
    form__input: true,
    'form__input--focus': titleHasFocus,
  });

  return (
    <>
      <label className={'form__label'}>Movie title</label>
      <input
        autoComplete="off"
        onBlur={() => {
          handleTitleValidation();
          handleTitleFocus();
        }}
        onFocus={() => handleTitleFocus()}
        name={'title'}
        className={formInputCLass}
        type={'text'}
        placeholder={'Please enter the title of the movie'}
        value={titleValue}
        onChange={e => handleChange(e)}
      />
      <div className={'col-12 form__info-section'}>
        {validTitleLength && validTitleUpperCase ? null : (
          <div className={'form__info-container'}>
            <p className={'form__info-container__error-message'}>{setErrorMessage()}</p>
          </div>
        )}
      </div>
    </>
  );
};

FormTitleField.propTypes = {
  onHandleChange: PropTypes.func,
  onTitleValidation: PropTypes.func,
  titleValue: PropTypes.string,
  validTitleLength: PropTypes.bool,
  validTitleUpperCase: PropTypes.bool,
};

export { FormTitleField };
