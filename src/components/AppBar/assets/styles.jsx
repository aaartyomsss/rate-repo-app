import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 1.1,
    backgroundColor: theme.color.bgColor,
    paddingBottom: '2%',
  },
  tabText: {
    color: '#f7f7f7',
    fontSize: theme.font.primary,
  },
  tab: {
    width: 150,
    alignItems: 'center',
  },
});

export default styles;
