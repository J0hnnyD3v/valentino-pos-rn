import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const CategoryLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Categorías',
          animation: 'ios_from_right',
        }} 
      />
      {/* <Stack.Screen name='[id]' /> */}
    </Stack>
  );
}

export default CategoryLayout;
