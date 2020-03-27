import React from 'react';
import { useForm } from 'react-hook-form';
import './rhf.css';
import ErrorMessage from '../ErrorMessage';

export default function ReachHooksForm(props) {
  const {register, errors, handleSubmit} = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div className='rhf'>
        <label htmlFor='description'>Remind me of</label>
        <input name="description" ref={register({required: true, minLength: 9})}/>
        {errors.description && <ErrorMessage error={errors.description.type}/>}
      </div>
      <input type="submit"/>
    </form>
  );
}
