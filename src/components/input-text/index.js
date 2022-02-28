import React from 'react';
import {Input} from 'native-base';
export const InputText = ({...props}) => {
  return (
    <Input
      {...props}
      borderColor='#CFCFCF'
      bgColor='#F9F9F9'
      p={4}
      fontSize='sm'
    />
  );
};
