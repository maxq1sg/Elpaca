import { Button } from '@mui/material';
import React, { FC } from 'react';

const ReusableButton: FC = ({ children }) => {
  return <Button fullWidth variant="contained">{children}</Button>;
};

export default ReusableButton;
