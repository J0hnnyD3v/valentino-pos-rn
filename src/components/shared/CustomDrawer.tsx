import { View, Text } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-light-link dark:bg-dark-link'>
        <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
          <Text className='text-light-link dark:text-dark-link font-bold text-4xl'>JN</Text>
        </View>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer;
