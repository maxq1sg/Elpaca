import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '../../constants';
import * as Yup from 'yup';

export const RegisterValidationSchema = Yup.object({
  email: Yup.string().trim().email('Invalid email!').required('Required'),
  password: Yup.string()
    .trim()
    .min(
      MIN_PASSWORD_LENGTH,
      `Password should be at least ${MIN_PASSWORD_LENGTH} chars`,
    )
    .max(
      MAX_PASSWORD_LENGTH,
      `Password should be max ${MAX_PASSWORD_LENGTH} chars`,
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords should be equal')
    .required('Required'),
});
