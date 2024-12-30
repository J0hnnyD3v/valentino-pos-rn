import { Pressable, PressableProps, Text } from 'react-native'
import ThemedText from './ThemedText';
import { useThemeColor } from '@hooks/useThemeColor';

interface Props extends PressableProps {
  children: string;
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'link' | 'tint';
  onPress?: () => void;
}

const CustomButton = ({ children, className, color = 'primary', onPress, }: Props) => {
  const backgroundColor = useThemeColor({}, color);
  let textColor = color === 'tint' ? 'text-white dark:text-cyan-700' : 'text-white';

  return (
    <Pressable
      style={{ backgroundColor }}
      className={`p-3 rounded-lg ${className} active:opacity-80`}
      onPress={onPress}
    >
      <Text className={`${textColor} text-2xl`}>{children}</Text>
    </Pressable>
  )
}

export default CustomButton;