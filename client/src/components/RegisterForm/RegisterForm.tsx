import { Form, Formik } from 'formik';
import React from 'react'
import LoginFormInput from '../BaseInput/FormikInput';
import ReusableButton from '../Button/Button';
import { initValues } from './initValues';
import { RegisterValidationSchema } from './RegisterValidationSchema';

const RegisterForm = () => {
    return (
        <Formik
      initialValues={initValues}
      validationSchema={RegisterValidationSchema}
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
        <LoginFormInput name="confirmPassword" type="password" label="Confirm password" />
        <ReusableButton>Submit</ReusableButton>
      </Form>
    </Formik>
    )
}

export default RegisterForm
