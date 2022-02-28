import {Button} from 'native-base';
import React from 'react';

export const AppButton = ({...props}) => {
  return (
    <Button
      {...props}
      bgColor='#2F80ED'
      _disabled={{bgColor: '#BDBDBD'}}
      _text={{color: 'white'}}
      alignSelf='center'
    />
  );
};
