import { useState } from 'react'
import { useColorScheme } from 'nativewind';

import AsyncStorage from '@react-native-async-storage/async-storage';

import ThemedView from '@components/shared/ThemedView';
import ThemedText from '@components/shared/ThemedText';
import ThemedCard from '@components/shared/ThemedCard';
import ThemedSwitch from '@components/shared/ThemedSwitch';

const SettingsScreen = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme === 'dark',
  });

  const storeData = async (theme: 'dark' | 'light') => {
    console.log('theme', theme)
    try {
      await AsyncStorage.setItem('selected-theme', theme);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? 'dark' : 'light');
    setDarkModeSettings({ darkMode: value });
    storeData(value ? 'dark' : 'light');
  }

  return (
    <ThemedView margin className='mt-2'>
      <ThemedText type='h2'>Tema de la aplicación</ThemedText>
      <ThemedCard className='mt-5 mb-2'>
        <ThemedSwitch
          label='Oscuro'
          value={darkModeSettings.darkMode}
          onValueChange={(value) => setDarkMode(value)}
          className='mb-5'
        />
      </ThemedCard>
    </ThemedView>
  )
}

export default SettingsScreen;
