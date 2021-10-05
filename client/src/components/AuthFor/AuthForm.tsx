import React, { useState } from 'react';
import classes from './Authform.module.scss';

import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import TabPanel from '../TabPanel/TabPanel';
import ReusableButton from '../Button/Button';
import LoginForm from '../LoginForm/LoginForm';
import useStyles from '../../mui/useStyles';
import RegisterForm from '../RegisterForm/RegisterForm';

const AuthForm = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const styles = useStyles();
  return (
    <div className={classes['form-wrapper']}>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        className={styles['form-content']}
      >
        <Tab label="Login" value={1} />
        <Tab label="Sign Up" value={2} />
      </Tabs>
      <TabPanel value={value} index={1}>
        <LoginForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RegisterForm />
      </TabPanel>
    </div>
  );
};

export default AuthForm;
