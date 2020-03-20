import React from 'react';
import { Form, Formik } from 'formik';
import './formikForm.css';
import { validateFormik } from '../validator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormikFormMUI = (props) => {
  const initialValues = {description: '', completed: false};
  return (
    <Formik
      initialValues={initialValues}
      validate={validateFormik}
      onSubmit={(values, {setSubmitting}) => {
        props.submitAction(values);
        setSubmitting(false);
      }}
    >
      {({isSubmitting, touched, handleChange, values, errors, setFieldTouched, isValid}) => {

        const change = (name, e) => {
          e.persist();
          handleChange(e);
          setFieldTouched(name, true, false);
        };

        return (
          <Form>
            <TextField
              id="description"
              name="description"
              helperText={touched.description ? errors.description : ''}
              error={touched.description && Boolean(errors.description)}
              label="Remember me to"
              value={values.description}
              onChange={change.bind(null, 'description')}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!isValid}
            >
              Submit
            </Button>

          </Form>
        );
      }}
    </Formik>
  );
};


export default FormikFormMUI;
