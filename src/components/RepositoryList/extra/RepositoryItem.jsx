import React from 'react';
import { View, Image } from 'react-native';
import styles from '../assets/styles';
import Text from '../../Text';

const RepositoryItem = (props) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = props.props.item;

  return (
    <View style={styles.repositoryItemContainer}>
      <View style={styles.repositoryItemHeader}>
        <Image
          source={{ uri: ownerAvatarUrl }}
          style={styles.repositoryItemImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerHeadingText}>{fullName}</Text>
          <Text style={styles.headerDescriptionText}>{description}</Text>
        </View>
      </View>
      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>{language}</Text>
      </View>
      <View style={styles.statConatiner}>
        <RepoStat stat={stargazersCount} statName={'Stars'} />
        <RepoStat stat={forksCount} statName={'Forks'} />
        <RepoStat stat={ratingAverage} statName={'Rating'} />
        <RepoStat stat={reviewCount} statName={'Reviews'} />
      </View>
    </View>
  );
};

const RepoStat = ({ stat, statName }) => {
  return (
    <View style={styles.statTextContainer}>
      <Text style={styles.statCount}>{modifyStatInteger(stat)}</Text>
      <Text style={styles.statName}>{statName}</Text>
    </View>
  );
};

const modifyStatInteger = (int) => {
  if (int >= 1000) {
    const reduced = Math.round(int / 100) / 10;
    const str = reduced.toString();
    return `${str}k`;
  }
  return int;
};

export default RepositoryItem;
