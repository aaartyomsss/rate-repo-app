import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './assets/styles';
import AppBarTab from './extra/AppBarTab';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.tab}>
          <AppBarTab tabName={'Repositories'} routeName={'/repo-list'} />
        </View>
        <View style={styles.tab}>
          <AppBarTab tabName={'Sign In'} routeName={'/sign-in'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
