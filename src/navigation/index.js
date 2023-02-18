import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInFunction from '../screens/SignInScreen/SignInScreen';
import SignUpFunction from '../screens/SignUpScreen/SignUpScreen';
import HomeFunction from '../screens/HomeScreen/HomeScreen';
// import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignIn' component={SignInFunction} />
        <Stack.Screen name='SignUp' component={SignUpFunction} />
        <Stack.Screen name='Home' component={HomeFunction} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation