import React from "react"
import { Text, View, StyleSheet, FlatList, Button } from "react-native"
// import Header from "../components/Header.js"
import EventListItem from "../components/EventListItem.js"
import CreateEvent from "../components/CreateEvent.js"
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
`;

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
  ];
  
  const CreateEventView = ( { navigation }) => {
    const {data, loading, error} = useQuery(GET_ALL_EVENTS)

    return(
        <View style={styles.partyContainer}>        
          {console.log(data)}
            <CreateEvent navigation={navigation}/>
            <Text>Events</Text>
            {loading && <Text>Your data is loading...</Text>}
            {error && <Text>Something has gone wrong</Text>}
            {data && <FlatList
                data={data.events}
                renderItem={({item}) => (
                    <EventListItem title={item.name} navigation={navigation} guest={item.guestId}/>
                 )     
                }
                keyExtractor={item => item.name}
                style={styles.eventList}
                />}
        </View>
    )
}

const styles = StyleSheet.create({
    partyContainer: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"80%",
        backgroundColor:"#f4f1f1"
    },
    eventList: {
        width:"100%",
    }
})


export default CreateEventView