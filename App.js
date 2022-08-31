//IMPORTS
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

//VIEWS
import LandingView from "./src/views/LandingView"
import ResultsView from "./src/views/ResultsView"
import VotingView from "./src/views/VotingView"
import CreateEventView from "./src/views/CreateEventView"
import PartyView from "./src/views/PartyView"

//NAVIGATION
const Stack = createNativeStackNavigator()

//APOLLO
const client = new ApolloClient ({
	cache: new InMemoryCache(),
	uri: 'https://7faa1aa4-3de7-4b85-8d00-12221883cecb.mock.pstmn.io/graphql/events',
})

export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen 
            name='Landing' 
            component={LandingView}
            options={{title:"login"}} />
          <Stack.Screen name='CreateEventView' component={CreateEventView} />
          <Stack.Screen name='PartyView' component={PartyView} />
          <Stack.Screen name='Voting' component={VotingView} />
          <Stack.Screen name='Results' component={ResultsView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}