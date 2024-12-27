import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Redirect, Stack, useLocalSearchParams } from 'expo-router'
import { useCategoryStore } from '@stores';
import ThemedTextInput from '@components/shared/ThemedTextInput';
import ThemedView from '@components/shared/ThemedView';

const CategoryScreen = () => {
  const [name, setName] = useState('');
  const categories = useCategoryStore(state => state.categories);
  const params = useLocalSearchParams();
  console.log('params', params)
  const category = categories.find(c => c.id.toString() === params?.id);
  console.log('category', category);

  if (!category) return <Redirect href='/' />;

  return (
    <ThemedView margin>
      {/* <Stack.Screen options={{ title: category.name }} /> */}
      <ThemedTextInput
        placeholder='Nombre de la categoría'
        autoCapitalize='none'
        keyboardType='default'
        icon='newspaper'
        value={name}
        onChangeText={setName}
      />
    </ThemedView>
  )
}

export default CategoryScreen;
