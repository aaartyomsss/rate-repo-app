import React from 'react';
import { View, Pressable } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { Formik } from 'formik';
import styles from './assets/styles';
import * as yup from 'yup';
import Text from '../Text';

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View>
      <Formik {...{ onSubmit, initialValues, validationSchema }}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.formInput}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        style={styles.formInput}
      />
      <Pressable onPress={onSubmit} style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username should be at least 3 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters long')
    .required('Password is required'),
});

export default SignIn;
