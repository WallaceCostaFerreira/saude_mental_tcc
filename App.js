import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import RegisterPass2 from './src/pages/Register/RegisterPass2';
import SplashScreen from './src/pages/SplashScreen';
import Feed from "./src/pages/Feed";

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
        <Stack.Screen 
          name="RegisterPass2"
          component={RegisterPass2}
          options={{ title: 'Continuar Cadastro',}}
        />
        <Stack.Screen 
          name="Feed"
          component={Feed}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
