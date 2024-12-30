import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

import CustomDrawer from '@components/shared/CustomDrawer';
import { useThemeColor } from '@hooks/useThemeColor';


const DrawerLayout = () => {
  const backgroundColor = useThemeColor({}, 'background');

  return <Drawer
    drawerContent={CustomDrawer}
    screenOptions={{
      drawerStyle: {
        backgroundColor,
        width: '65%'
      },
      overlayColor: 'rgba(0,0,0,0.4)',
      drawerActiveTintColor: 'dodgerblue',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0.1, // remove shadow on iOS
      },
      headerTitleStyle: {
        color: 'dodgerblue',
      },
      sceneStyle: {
        backgroundColor,
      },
    }}
  >
    <Drawer.Screen
      name="(home)/index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: 'Inicio',
        title: 'Inicio',
        drawerIcon: ({ color, size }) => <Ionicons name='home-outline' color={color} size={size} />
      }}
    />
    <Drawer.Screen
      name="(category)" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: 'Categorías',
        headerShown: false,
        title: 'Categorías',
        drawerIcon: ({ color, size }) => <Ionicons name='pricetags-outline' color={color} size={size} />
      }}
    />
    <Drawer.Screen
      name="(products)/index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: 'Productos',
        title: 'Productos',
        drawerIcon: ({ color, size }) => <Ionicons name='fast-food-outline' color={color} size={size} />
      }}
    />
    <Drawer.Screen
      name="(tables)/index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: 'Mesas',
        title: 'Mesas',
        drawerIcon: ({ color, size }) => <Ionicons name='layers-outline' color={color} size={size} />
      }}
    />
    <Drawer.Screen
      name="(orders)/index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: 'Ordenes',
        title: 'Ordenes',
        drawerIcon: ({ color, size }) => <Ionicons name='receipt-outline' color={color} size={size} />
      }}
    />
    <Drawer.Screen
      name="(settings)/index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: 'Configuración',
        title: 'Configuración',
        drawerIcon: ({ color, size }) => <Ionicons name='cog-outline' color={color} size={size} />
      }}
    />
  </Drawer>;
};

export default DrawerLayout;
