import React from 'react'
import { Pressable } from 'react-native'
import { Stack, router, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useThemeColor } from '@hooks/useThemeColor';

const CategoryLayout = () => {
  const navigation = useNavigation();
  const backgroundColor = useThemeColor({}, 'background');

  const onHeaderLeftClick = (cangoBack: boolean) => {
    if (cangoBack) {
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        headerTintColor: 'dodgerblue',
        headerLeft: ({ tintColor, canGoBack }) => (
          <Pressable onPressIn={() => onHeaderLeftClick(canGoBack!)}>
            <Ionicons
              style={{ color: 'dodgerblue' }}
              name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
              className='mr-5'
              size={25}
            />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Categorías',
          animation: 'fade_from_bottom',
        }}
      />
      {/* <Stack.Screen name='[id]' /> */}
    </Stack>
  );
}

export default CategoryLayout;
