import React, { useState } from 'react'
import { View, TextInputProps, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@hooks/useThemeColor';

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedTextInput = ({ icon, ...rest }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = React.useRef<TextInput>(null);
  const primary = useThemeColor({}, 'primary');
  const text = useThemeColor({}, 'text');

  return (
    <View
      className={`
        border
        rounded-lg
        p-3
        mb-4
        flex-row
        items-center
        ${isActive ? 'border-light-primary' : 'border-gray-300 dark:border-gray-100'}
      `}
      onTouchStart={() => inputRef.current?.focus()}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color={text}
          className='mr-2'
        />
      )}
      <TextInput
        ref={inputRef}
        placeholderTextColor={'#5c5c5c'}
        {...rest}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        style={{ color: text, flex: 1 }}
        className='mr-2'
      />
    </View>
  )
}

export default ThemedTextInput;
