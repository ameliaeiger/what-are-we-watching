import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import PartyView from "./src/views/PartyView"
import LandingView from "./src/views/LandingView"
import ResultsView from "./src/views/ResultsView"
import VotingView from './src/views/VotingView'

import movieData from './moviedata'
import { useEffect, useState } from 'react'

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={LandingView} />
        <Stack.Screen name='Party' component={PartyView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}