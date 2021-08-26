import React from 'react';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';

const Main = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/repo-list">
          <RepositoryList />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Redirect to="/repo-list" />
      </Switch>
    </>
  );
};

export default Main;
