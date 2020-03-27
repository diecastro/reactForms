import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ErrorMessage from '../ErrorMessage';


export default function ReachHooksFormMUI(props) {
  const {register, handleSubmit, errors, control} = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>

      <Controller
        as={TextField}
        label="Remember me to"
        name="description"
        control={control}
        defaultValue=""
        variant='outlined'
        fullWidth
        margin='normal'
        error={!!errors.description}
        inputRef={register({required: true, minLength: 9})}
      />
      {errors.description && <ErrorMessage error={errors.description.type}/>}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
}
