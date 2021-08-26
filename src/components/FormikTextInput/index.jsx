import React from 'react';
import { useField } from 'formik';
import { StyleSheet } from 'react-native';
import TextInput from '../TextInput';
import theme from '../../theme';
import Text from '../Text';

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: theme.color.error,
    marginHorizontal: '2%',
    marginTop: 2,
  },
});

export default FormikTextInput;
