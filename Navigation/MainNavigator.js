import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Src/Screens/CommonScreens/HomeScreen';
import CartScreen from '../Src/Screens/CommonScreens/CartScreen';
import Introslider from '../Src/Screens/CommonScreens/Introslider';
import ItemsScreen from '../Src/Screens/CommonScreens/ItemsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemDetailsScreen from '../Src/Screens/CommonScreens/ItemsDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ItemsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Items" component={ItemsScreen} />
      <Stack.Screen name="Introslider" component={Introslider} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
