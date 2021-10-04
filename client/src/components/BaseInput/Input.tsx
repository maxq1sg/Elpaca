import { FormControl, InputLabel } from '@mui/material';
import React from 'react';
import CustomInput from './BaseInput';

const FormikInputWrapper = () => {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor="bootstrap-input">
        Bootstrap
      </InputLabel>
      <CustomInput />
    </FormControl>
  );
};

export default FormikInputWrapper;
