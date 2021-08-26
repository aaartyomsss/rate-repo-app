import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import theme from '../../theme';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    error ? { borderColor: theme.color.error } : null,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
