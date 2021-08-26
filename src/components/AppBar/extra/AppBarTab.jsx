import React from 'react';
import { Pressable } from 'react-native';
import styles from '../assets/styles';
import { Link } from 'react-router-native';
import Text from '../../Text';

const AppBarTab = ({ tabName, routeName }) => {
  return (
    <Pressable>
      <Link to={routeName}>
        <Text style={styles.tabText}>{tabName}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
