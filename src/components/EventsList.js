//IMPORTS
import React, { useContext } from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import AppContext from "../components/AppContext.js"


// EVENTS LIST
const EventsList = ({ navigation, click }) => {
    const globals = useContext(AppContext)


    return(
        <View
            style={styles.eventsContainer}>
            <Text
                style={styles.eventsListText}>Events</Text>
            <FlatList
                data={globals.allEvents}
                extraData={globals.allEvents}
                initialNumToRender={4}
                // contentContainerStyle={{flexGrow:1}}
                renderItem={({item}) => (<EventListItem event={item} title={item.name} guest={item.guest} navigation={navigation} onClick={click} />)}
                keyExtractor={item => item.id}/>
      </View>
    )
}

// LIST ITEM - INDIVIDUAL EVENT 
const EventListItem = ({ event, title, navigation, onClick, guest }) => {

    return (
      <TouchableOpacity style={styles.eventButton} onPress={(e) => onClick(e, event, title)}>
        <Text style={{fontSize:20}}>{title}</Text>
      </TouchableOpacity>
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
    eventButton: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F37180",
        height:50,
        width:350,
        margin:10,
        borderRadius:20
      },
})