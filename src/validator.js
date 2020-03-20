export const validateFormik = values => {
  const errors = {};
  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length < 10) {
    errors.description = 'Must be 15 characters or less';
  }
  return errors;
};
