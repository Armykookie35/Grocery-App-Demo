import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Introslider from '../Src/Screens/CommonScreens/Introslider';
import LoginScreen from '../Src/Screens/AuthScreens/LoginScreen';
import HomeScreen from '../Src/Screens/CommonScreens/HomeScreen';
import ItemsScreen from '../Src/Screens/CommonScreens/ItemsScreen';
import ItemsDetails from '../Src/Screens/CommonScreens/ItemsDetails';
import CartScreen from '../Src/Screens/CommonScreens/CartScreen';
import MainNavigator from './MainNavigator';
import SplashScreen from '../Src/Screens/AuthScreens/SplashScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen"  component={SplashScreen}/>
        <Stack.Screen name="Introslider" component={Introslider} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="CartScreen" component={CartScreen}/>
        
        <Stack.Screen name="ItemDetailsScreen" component={ItemsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
