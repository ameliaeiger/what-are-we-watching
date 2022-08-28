import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import LandingView from "./src/views/LandingView"
import ResultsView from "./src/views/ResultsView"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LandingView /> */}
      <ResultsView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})