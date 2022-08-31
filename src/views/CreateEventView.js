//IMPORTS
import React from "react"
import { Text, View, StyleSheet, Dimensions } from "react-native"

//COMPONENTS
import CreateEvent from "../components/CreateEvent.js"
import EventsList from "../components/EventsList.js"

//APOLLO
import { useQuery, gql } from "@apollo/client"


const GET_ALL_EVENTS = gql`
  {
        events {
        hostId
        guestId
        name
        status
        }
  }
`

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      date: 'August 31st',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      date: 'September 12th',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      date: 'September 22nd',
    },
  ]
  
  const CreateEventView = ( { navigation }) => {

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const {data, loading, error} = useQuery(GET_ALL_EVENTS)

    const getDisplay = () => {
      if (loading){
        return <Text>loading...</Text>
      } else if  (!loading && !error && data) {
        return(
          <EventsList
            data={data}
            navigation={navigation} />
          )
      } else {
        return <Text>Oops! There was an error loading the page. Please try again.</Text>
      }
    }

    return(
        <View style={{height:windowHeight, width:windowWidth}}>        
          {/* {console.log(data)} */}
            <CreateEvent navigation={navigation}/>
            {getDisplay()}
        </View>
    )
}

export default CreateEventView