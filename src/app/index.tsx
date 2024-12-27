import { Link, Redirect, router } from 'expo-router';

import CustomButton from '@components/shared/CustomButton';
import ThemedView from '@components/shared/ThemedView';
import ThemedText from '@components/shared/ThemedText';

const ValentinoPosApp = () => {
  return (
    <Redirect href={'/(drawer)/(category)'} />
    // <ThemedView safe margin className='flex-1 justify-center'>
    //   <CustomButton onPress={() => router.push('/(auth)')} className='mb-5' color='danger'>Auth</CustomButton>
    //   <CustomButton onPress={() => router.push('/(admin)')} className='mb-5' color='success'>Admin</CustomButton>
    //   <CustomButton onPress={() => router.push('/(user)')} className='mb-5' color='link'>Usuarios</CustomButton>
    // </ThemedView>
  )
}

export default ValentinoPosApp;
