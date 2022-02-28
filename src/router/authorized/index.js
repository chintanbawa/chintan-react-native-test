import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UsersListScreen from 'screens/users';

const Stack = createNativeStackNavigator();

const AuthorizedRouter = () => {
  return (
    <Stack.Navigator initialRouteName='SignInScreen'>
      <Stack.Screen
        name='UsersListScreen'
        component={UsersListScreen}
        options={{
          title: 'Gift a NFT',
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: 'black'
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthorizedRouter;
