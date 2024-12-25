import { useThemeColor } from '@hooks/useThemeColor';
import { View, Text, ViewProps } from 'react-native'

interface Props extends ViewProps {
  className?: string;
}
const ThemedCard = ({ className, children, ...rest }: Props) => {
  const backgroundColor = useThemeColor({}, 'background');
  console.log('backgroundColor', backgroundColor)
  return (
    <View
      style={{ backgroundColor }}
      className={`
      p-2
      rounded-xl
      shadow
      shadow-blue-400
      dark:shadow-indigo-500
      ${className}
    `}
      {...rest}
    >
      {children}
    </View>
  )
}

export default ThemedCard;
