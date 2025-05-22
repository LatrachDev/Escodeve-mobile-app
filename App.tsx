import React from "react";
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;