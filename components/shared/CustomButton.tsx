import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps{
  children?: 'string';
  color: 'primary' | 'secondary' | 'tertiary';
}


const CustomButton = ({children, color}: Props) => {

  const btnColor ={
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary'
  }[color];

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor}`}
    >
      <Text>{children}</Text>
    </Pressable>
  )
}

export default CustomButton