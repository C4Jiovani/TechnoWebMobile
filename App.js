import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import accueil from './views/accueil.js'
import test from './views/test.js'

const Stack = createStackNavigator()

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='accueil' component={accueil} />
        <Stack.Screen name='test' component={test} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;