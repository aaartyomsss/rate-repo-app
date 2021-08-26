import { StyleSheet } from 'react-native';
import theme from '../../../theme';
const styles = StyleSheet.create({
  formInput: {
    borderWidth: 1,
    borderColor: theme.formInput.borderColor,
    marginTop: '5%',
    marginHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: 5,
  },
  submitBtn: {
    backgroundColor: theme.color.bgColor,
    marginHorizontal: '2%',
    marginTop: '5%',
    paddingVertical: '2%',
    alignItems: 'center',
    borderRadius: 5,
  },
  submitBtnText: {
    color: 'white',
    fontSize: theme.font.primary,
  },
});

export default styles;
