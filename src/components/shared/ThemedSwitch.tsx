import { View, Text, Switch, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import { useThemeColor } from '@hooks/useThemeColor';

interface Props {
  label?: string;
  className?: string;
  value: boolean;

  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ label = '', className , value, onValueChange }: Props) => {
  const switchActiveColor = useThemeColor({}, 'link');

  const [state, setState] = useState({
    isActive: true,
  });

  return (
    <Pressable className={`flex flex-row justify-between items-center mx-2 active:opacity-80 my-2 ${className}`}>
      { label ? <ThemedText type='h2'>{label}</ThemedText> : <View />}
      <Switch
        ios_backgroundColor="#3e3e3e"
        thumbColor={isAndroid ? switchActiveColor : ''}
        trackColor={{ false: '#767577', true: switchActiveColor }}
        onValueChange={onValueChange}
        value={value}
      />
    </Pressable>
  )
}

export default ThemedSwitch;
