import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  repositoryItemContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    marginBottom: '1%',
    backgroundColor: '#ececec',
  },
  repositoryItemHeader: {
    flexDirection: 'row',
  },
  headerTextContainer: {
    paddingLeft: '3%',
    flex: 1,
    justifyContent: 'center',
  },
  headerHeadingText: {
    fontWeight: 'bold',
    fontSize: theme.font.primary,
  },
  headerDescriptionText: {
    flexShrink: 1,
  },
  repositoryItemImage: {
    height: 50,
    aspectRatio: 1,
  },
  languageContainer: {
    borderWidth: 1,
    borderColor: theme.color.bgColor,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: '1%',
    backgroundColor: theme.color.bgColor,
    borderRadius: 5,
    marginLeft: 60,
  },
  languageText: {
    color: 'white',
  },
  statConatiner: {
    flexDirection: 'row',
    paddingTop: '3%',
    justifyContent: 'space-between',
  },
  statTextContainer: {
    alignItems: 'center',
  },
  statCount: {
    fontWeight: 'bold',
    fontSize: theme.font.primary,
  },
  statName: {
    color: theme.fontColor.secondary,
    fontSize: theme.font.secondary,
  },
});

export default styles;
