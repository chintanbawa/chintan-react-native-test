import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import AuthorizedNavigator from './authorized';
import UnauthorizedNavigator from './unauthorized';

import NavigationService from 'utils/NavigationService';

const Router = () => {
  const authToken = useSelector(state => state.signIn.authToken);

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      {!authToken ? <UnauthorizedNavigator /> : <AuthorizedNavigator />}
    </NavigationContainer>
  );
};

export default Router;
