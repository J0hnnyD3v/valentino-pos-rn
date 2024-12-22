import { useThemeColor } from '@hooks/useThemeColor';
import { View, Text, TextProps } from 'react-native'

type TextType = 'normal' | 'h1' | 'h2' | 'link' | 'danger';
type FontWeightType = 'font-thin' |
  'font-extralight' |
  'font-light' |
  'font-normal' |
  'font-medium' |
  'font-semibold' |
  'font-bold' |
  'font-extrabold' |
  'font-black';

interface Props extends TextProps {
  className?: string;
  type?: TextType;
  weight?: FontWeightType;
}
const ThemedText = ({ className, type = 'normal', weight = 'font-normal', ...rest }: Props) => {
  const textColor = useThemeColor({}, (type === 'link' || type === 'danger' ? type : 'text'));
  return <Text
    style={{ color: textColor }}
    className={`
      ${type === 'normal' ? 'text-base' : ''}
      ${type === 'h1' ? 'text-3xl' : ''}
      ${type === 'h2' ? 'text-xl' : ''}
      ${type === 'link' ? 'underline' : ''}
      ${weight}
      ${className}
    `}
    {...rest}
  />
}

export default ThemedText;
