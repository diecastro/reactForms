import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Typography from '@material-ui/core/Typography';
import './formikForm.css';
import { validateFormik } from '../validator';

const TodoFormikForm = (props) => {
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
      {({isSubmitting}) => (
        <Form>
          <div className='formRow'>
            <label htmlFor="description">Remember me to</label>
            <Field name="description" type="text"/>
            <ErrorMessage name="description" render={errorMessage => <Typography variant={'subtitle2'}
                                                                                 color={'error'}>{errorMessage}</Typography>}/>
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};


export default TodoFormikForm;

