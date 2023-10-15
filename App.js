import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Menu from './src/pages/Menu';

const Stack = createNativeStackNavigator();

  export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login'component={Home} options={{
            headerShown: false, // Para ocultar o cabeçalho
          }}/>
          <Stack.Screen name='Menu' component={Menu} options={{
            headerShown: false, // Para ocultar o cabeçalho
          }}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
