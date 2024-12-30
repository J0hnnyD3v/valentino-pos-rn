import { Image, Pressable, ScrollView } from 'react-native'
import { useState } from 'react'
import { Redirect, Stack, useLocalSearchParams, useNavigation, router, Link } from 'expo-router'
import { useCategoryStore } from '@stores';
import ThemedText from '@components/shared/ThemedText';
import { useThemeColor } from '@hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@components/shared/CustomButton';

const CategoryScreen = () => {
  const [name, setName] = useState('');
  const params = useLocalSearchParams();
  const categories = useCategoryStore(state => state.categories);
  const backgroundColor = useThemeColor({}, 'background');
  const linkColor = useThemeColor({}, 'tint');
  // const navigation = useNavigation();

  const category = categories.find(c => c.id.toString() === params?.id);

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: category?.name ?? 'Categoría',
  //     animation: 'fade_from_bottom',
  //     contentStyle: {
  //       color: 'dodgerblue'
  //     }
  //   });
  // }, [category]);


  if (!category) return <Redirect href='/' />;

  return (
    <ScrollView style={{ backgroundColor }} className='p-4'>
      <Stack.Screen
        options={{
          title: category?.name ?? 'Categoría',
          headerRight: ({ tintColor, canGoBack }) => (
            <Pressable onPressIn={() => router.push(`/(drawer)/(category)/create?id=${category?.id}`)}>
              <Ionicons
                style={{ color: linkColor }}
                name={'create-outline'}
                className=''
                size={30}
              />
            </Pressable>
          ),
        }}
      />

      <Image
        source={{ uri: category.image }}
        resizeMode='cover'
        className='w-full h-auto aspect-square rounded-3xl shadow shadow-cyan-700'
      />
      <ThemedText type='h1' className='mt-5' weight='font-semibold'>{category.name}</ThemedText>
      <ThemedText type='h2' className='mt-2' weight='font-medium' color='gray'>{category.description}</ThemedText>
    </ScrollView>
  )
}

export default CategoryScreen;
