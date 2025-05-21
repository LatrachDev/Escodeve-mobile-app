import React from "react";
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';
// const App: React.FC = () => {
//   return <WelcomeScreen />;
// };

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;