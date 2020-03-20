import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validateFormik } from '../validator';
import TextField from '@material-ui/core/TextField';

const renderField = ({
                       input,
                       label,
                       type,
                       meta: {touched, error, warning},
                       disabled,
                       helperText
                     }) => {

  const errorText = touched && error ? error : null;
  return (
    <>
      <p>{label}</p>
      <TextField
        margin='normal'
        variant='outlined'
        error={Boolean(touched && error)}
        fullWidth
        helperText={errorText ? errorText : helperText}
        id={input.name}
        value={input.value ? input.value : ''}
        disabled={disabled}
        {...input}
      />
    </>
  );
};

const ReminderReduxFormMUI = props => {
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
  form: 'remindersFormMui',
  validate: validateFormik,
  initialValues: ({description: '', completed: false})
})(ReminderReduxFormMUI);
