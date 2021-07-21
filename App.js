import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import SplashScreen from './src/pages/SplashScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
        />
        <Stack.Screen 
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: 'Inicio',
          headerShown:false, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
