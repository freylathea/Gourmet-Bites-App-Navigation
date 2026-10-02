import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import HomeScreen from './HomeScreen';
import CatalogScreen from './CatalogScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#d97706', // Warm amber theme
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Gourmet Bites' }}
        />
        <Stack.Screen 
          name="Catalog" 
          component={CatalogScreen} 
          options={{ title: 'Recipe Catalog' }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{ title: 'Recipe Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}