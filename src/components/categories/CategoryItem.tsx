import { View, Image, Pressable } from 'react-native'

import ThemedText from '@components/shared/ThemedText';
import { ICategory } from '@stores';
import { router } from 'expo-router';

interface Props {
  item: ICategory;
}
const CategoryItem = ({ item }: Props) => {
  return (
    <Pressable
      onPress={() => router.push({ pathname: '/(drawer)/(category)/[id]', params: { id: item.id } })}
      className={`
        flex-1
        max-w-[50%]
        rounded-xl
        active:opacity-55
        shadow
        shadow-blue-400/70
        dark:shadow-indigo-500/60
        bg-gray-100/90
        dark:bg-light-text/50
      `}
    >
      <Image
        source={{ uri: item.image }}
        resizeMode='cover'
        className='w-full h-auto aspect-square rounded-t-xl'
      />
      <View className='p-2'>
        <ThemedText className='my-2' weight='font-semibold' type='h2'>{item.name}</ThemedText>
        <ThemedText className='my-5' numberOfLines={2}>{item.description}</ThemedText>
      </View>
    </Pressable>
  )
}

export default CategoryItem;
