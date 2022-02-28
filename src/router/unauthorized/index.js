import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from 'screens/sign-in';

const Stack = createNativeStackNavigator();

const UnauthorizedNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='SignInScreen'>
      <Stack.Screen
        name='SignInScreen'
        component={SignInScreen}
        options={{title: 'Sign In', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UnauthorizedNavigator;
