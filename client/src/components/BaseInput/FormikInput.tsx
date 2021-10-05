import { FormControl, InputBase, InputLabel } from '@mui/material';
import { useField, ErrorMessage } from 'formik';
import { FC } from 'react';
import useStyles from '../../mui/useStyles';
import ErrorTextMessage from '../ErrorMessage/ErrorMessage';

const LoginFormInput: FC<{ name: string; label: string; type: string }> = ({
  name,
  label,
  type,
}) => {
  const [field, meta] = useField({ name, type });
  const hasError = Boolean(meta.touched && meta.error);
  const isCorrect = Boolean(meta.touched && !meta.error);
  const styles = useStyles();
  return (
    <div style={{ marginBottom: '12px' }}>
      <FormControl variant="standard" fullWidth component="div">
        <div>
          {label}
        </div>
        <InputBase
          placeholder={label}
          className={styles.input}
          error={hasError}
          fullWidth
          {...field}
          name={name}
          type={type}
        />
      </FormControl>

      {hasError ? (
        <ErrorMessage name={name} component={ErrorTextMessage} />
      ) : null}
    </div>
  );
};

export default LoginFormInput;
