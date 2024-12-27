import React from 'react'
import { View, TextInputProps, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedTextInput = ({ icon, ...rest }: Props) => {
  return (
    <View
      className={`
        border
        rounded-lg
        p-1
        mb-4
        flex-row
        items-center
      `}
    >
      <TextInput placeholderTextColor={'#5c5c5c'} {...rest} />
    </View>
  )
}

export default ThemedTextInput;
