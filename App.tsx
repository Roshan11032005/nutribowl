import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the two new screens
import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen'; 

// Initialize the Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // 2. Wrap all navigation components in NavigationContainer
    <NavigationContainer>
      <Stack.Navigator 
        // Start on the Intro screen
        initialRouteName="Intro"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50', // Nutribowl green header
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Page 1: Intro Screen with Animation (Header hidden) */}
        <Stack.Screen 
          name="Intro" 
          component={IntroScreen} 
          options={{ headerShown: false }} 
        />
        
        {/* Page 2: Unprotected Login Screen */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login to Nutribowl' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
