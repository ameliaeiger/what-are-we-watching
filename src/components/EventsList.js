import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"

import EventListItem from "./EventListItem"

const EventsList = ({ navigation, data}) => {

    return(
        <View
            style={styles.eventsContainer}>
            <Text
                style={styles.eventsListText}>Events</Text>
            <FlatList
                data={data.events}
                contentContainerStyle={{flexGrow:1}}
                renderItem={({item}) => (<EventListItem title={item.name} navigation={navigation} guest={item.guestId}/>)}
                keyExtractor={item => item.name}/>
      </View>
    )
}

export default EventsList

const styles = StyleSheet.create({
    eventsContainer: {
        // flex:1,
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
