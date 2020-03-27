import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validateFormik } from '../validator';

const renderField = ({
                       input,
                       label,
                       type,
                       meta: {touched, error, warning}
                     }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const ReminderReduxForm = props => {

  const {handleSubmit, pristine, reset, submitting} = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="description"
        type="text"
        component={renderField}
        label="Remind me to"
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'remindersForm',
  validate: validateFormik,
  initialValues: ({description: '', completed: false})
})(ReminderReduxForm);
