import { Form, Formik } from 'formik';
import LoginFormInput from '../BaseInput/FormikInput';
import FormikInputWrapper from '../BaseInput/Input';
import ReusableButton from '../Button/Button';
import { initValues } from './initValues';
import { LoginValidationSchema } from './LoginValidationSchema';

const LoginForm = () => {
  return (
    <Formik
      initialValues={initValues}
      validationSchema={LoginValidationSchema}
      onSubmit={async (values) => {
        console.log(values);
        // try {
        //   dispatch({ type: EUserActionType.AUTH_USER_REQUEST });
        //   const { data } = await $api.post('api/auth/login', values);
        //   dispatch({ type: EUserActionType.AUTH_USER_SUCCESS, payload: data });
        //   localStorage.setItem('user', JSON.stringify(data));
        //   Router.push('/');
        // } catch (error) {
        //   dispatch({
        //     type: EUserActionType.AUTH_USER_ERROR,
        //     payload: handleAxiosError(error as AxiosError),
        //   });
        // }
      }}
    >
      <Form>
        <LoginFormInput name="email" type="text" label="email" />
        <LoginFormInput name="password" type="password" label="password" />
        <FormikInputWrapper />
        <ReusableButton>Submit</ReusableButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
