//IMPORTS
import React, { useState, useContext } from "react"
import { Button } from "react-native"
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import AppContext from "./src/components/AppContext"

//VIEWS
import LandingView from "./src/views/LandingView"
import ResultsView from "./src/views/ResultsView"
import VotingView from "./src/views/VotingView"
import CreateEventView from "./src/views/CreateEventView"
import PartyView from "./src/views/PartyView"

//NAVIGATION
const Stack = createNativeStackNavigator()
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

//APOLLO
const client = new ApolloClient ({
  uri: 'https://7faa1aa4-3de7-4b85-8d00-12221883cecb.mock.pstmn.io/graphql/events',
  cache: new InMemoryCache(),
})
// uri: 'https://what-are-we-watching-be.herokuapp.com/graphql',


export default function App() {
  // NEW //

  const [allUserEvents, setAllUserEvents] = useState("")

  // END //
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState("")

  const globals = {
    // NEW //

    allUserEvents: allUserEvents,
    setAllUserEvents: setAllUserEvents,

    // END //
    loggedIn: loggedIn,
    setLoggedIn: setLoggedIn,
    userInfo: userInfo,
    setUserInfo: setUserInfo
  }

  const LoginScreen = ({navigation}) => {
    return(
      <LandingView navigation={navigation} />
    )
  }
  
  const PartyScreen = ({navigation}) => {
    return (
      <CreateEventView navigation={navigation} />
    )
  }
  
  const SwipingScreen = ({navigation}) => {
    return (
      <VotingView navigation={navigation}/>
    )
  }
  
  const MatchScreen = ({navigation}) => {
    return (
      <ResultsView navigation={navigation}/>
    )
  }

  const logoutOption = ({navigation}) => {
    return ({
      headerRight: () => (
      <Button
          onPress={() => navigation.navigate("Landing")}
          title="logout"
          color="#F37180"
        />
      ),
      })
    }

  return (
      <ApolloProvider client={client}>
        <AppContext.Provider value={globals}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Landing' component={LoginScreen} options={{title:"login"}} />
              <Stack.Screen name='CreateEventView' component={PartyScreen} options={logoutOption} />
              <Stack.Screen name='VotingView' component={SwipingScreen} options={logoutOption} />
              <Stack.Screen name='Results' component={MatchScreen} options={logoutOption} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppContext.Provider>
      </ApolloProvider>
  )
}