import {Text} from 'native-base';
import React from 'react';

export const ErrorText = ({...props}) => {
  return <Text {...props} color='danger.500' ml={2} mt={1} />;
};
