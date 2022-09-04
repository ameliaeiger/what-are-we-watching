//IMPORTS
import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import AppContext from "../components/AppContext.js";

//COMPONENTS
import EventListItem from "./EventListItem"

const EventsList = ({ navigation, toggleModal }) => {
    const globals = useContext(AppContext)

    console.log("ALL USER EVENTS EVENT LIST: ", globals.allUserEvents)

    return(
        <View
            style={styles.eventsContainer}>
            <Text
                style={styles.eventsListText}>Events</Text>
            <FlatList
                data={allUserEvents}
                contentContainerStyle={{flexGrow:1}}
                renderItem={({item}) => (<EventListItem title={item.name} guest={item.guestId} navigation={navigation} toggleModal={toggleModal} />)}
                keyExtractor={item => item.name}/>
      </View>
    )
}

export default EventsList

const styles = StyleSheet.create({
    eventsContainer: {
        height:"100%",
        width:"100%", 
        display:"flex", 
        alignItems:"center",
        marginBottom:150,
        backgroundColor:"white",
    },
    eventsListText: {
        color:"#544E50"
    },
})