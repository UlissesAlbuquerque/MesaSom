import React from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './Welcome/index'

// import { Container } from './styles';
const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome"  component={Welcome} />  
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
