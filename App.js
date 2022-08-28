import { View } from 'react-native'

import LandingView from "./src/views/LandingView"
import VotingView from './src/views/VotingView'

import movieData from './moviedata'
import { useEffect, useState } from 'react'

export default function App() {

  return (
    <View>
      <LandingView />
    </View>
  )
}