import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RiderHome from './screens/RiderHome';
import DriverHome from './screens/DriverHome';
import Login from './screens/Login';
import theme from './theme';

export type RootStackParamList = {
  Login: undefined;
  RiderHome: undefined;
  DriverHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer theme={theme as any}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RiderHome" component={RiderHome} />
        <Stack.Screen name="DriverHome" component={DriverHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
