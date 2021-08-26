import { Platform } from 'react-native';

const theme = {
  color: {
    bgColor: '#0080ff',
    error: '#d73a4a',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  font: {
    primary: 18,
    secondary: 16,
  },
  fontColor: {
    secondary: '#808080',
  },
  formInput: {
    borderColor: '#808080',
  },
  fonts: {
    main: Platform.OS === 'android' ? 'Roboto' : 'Arial',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
