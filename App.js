import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import RegisterPass2 from './src/pages/RegisterPass2';
import SplashScreen from './src/pages/SplashScreen';
import Feed from "./src/pages/Feed";
import Profile from "./src/pages/Profile";
import Publish from "./src/pages/Publish";
import SavePublish from "./src/pages/SavePublish";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{ headerShown:false, }}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
          options={{ headerShown:false, }}
        />
        <Stack.Screen 
          name="RegisterPass2"
          component={RegisterPass2}
          options={{ title: 'Continuar Cadastro',}}
        />
        <Stack.Screen 
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: 'Inicio',
          headerShown:false, }}
        />
        <Stack.Screen 
          name="Feed"
          component={Feed}
          options={{ headerShown:false, }}
        />
        <Stack.Screen 
          name="Profile"
          component={Profile}
          options={{ headerShown:true,
          headerTintColor:'#000',
          title:"Perfil" }}
        />
        <Stack.Screen 
          name="Publish"
          component={Publish}
          options={{ headerShown:false }}
        />
        <Stack.Screen 
          name="SavePublish"
          component={SavePublish}
          options={{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
