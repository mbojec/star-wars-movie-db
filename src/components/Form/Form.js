import React, { useState } from 'react';
import { withRedux } from '../../redux/wrapper';
import PropTypes from 'prop-types';
import { FormBtn, FormPlanetList, FormSavedPlanetsList, FormTitleField } from './index';

const Form = ({ savedQueryPlanets, onSaveCustomFilm, onClearQueryPlanets }) => {
  const [values, setValues] = useState({ title: '' });
  const [validTitleLength, setValidTitleLength] = useState(true);
  const [validTitleUpperCase, setValidTitleUpperCase] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    validateForm();
  }
  function handleChange(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleTitleValidation() {
    if (values.title.length > 0) {
      const titleLengthValidation = values.title.length >= 3;
      const titleUpperCaseValidation = /[A-Z]/.test(values.title[0]);
      setValidTitleLength(titleLengthValidation);
      setValidTitleUpperCase(titleUpperCaseValidation);
    } else {
      setValidTitleLength(true);
    }
  }

  function validateForm() {
    const titleLengthValidation = validTitleLength && values.title.length >= 3;
    if (titleLengthValidation && validTitleUpperCase && savedQueryPlanets.length > 0) {
      save();
      setValues({ ...values, title: '' });
      setValidTitleLength(true);
      setValidTitleUpperCase(true);
    }
  }

  function save() {
    const customFilm = {
      title: values.title,
      planetsDetail: savedQueryPlanets,
    };
    onSaveCustomFilm(customFilm);
    onClearQueryPlanets();
  }

  return (
    <>
      <div className={'row form-container'}>
        <div className={'col-12'}>
          <form onSubmit={event => handleSubmit(event)}>
            <div className={'row'}>
              <div className={`col-12 form__title-section`}>
                <FormTitleField
                  onHandleChange={(key, value) => handleChange(key, value)}
                  onTitleValidation={() => handleTitleValidation()}
                  titleValue={values.title}
                  validTitleLength={validTitleLength}
                  validTitleUpperCase={validTitleUpperCase}
                />
              </div>
              <div className={'col-12 form__save-list-section'}>{savedQueryPlanets.length > 0 && <FormSavedPlanetsList />}</div>
              <div className={'col-12 form__planet-section'}>
                <FormPlanetList />
              </div>
            </div>
            <div className={'row form__btn-section'}>
              <FormBtn onHandleSubmit={event => handleSubmit(event)} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  savedQueryPlanets: PropTypes.array,
  onSaveCustomFilm: PropTypes.func,
  onClearQueryPlanets: PropTypes.func,
};

const connectedComponent = withRedux(Form);
export { connectedComponent as Form };
