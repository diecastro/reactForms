import React from 'react';

const ErrorMessage = ({error}) => {
  const errorText = {
    'required': 'This field is required',
    'minLength': 'Needs to be at least 15 characters',
  };
  return (<span className='error'>{errorText[error]}</span>);
};

export default ErrorMessage;
