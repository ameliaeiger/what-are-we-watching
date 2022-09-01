import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useMutation, gql } from "@apollo/client"

    const CREATE_USER_EVENT = gql`
    mutation CreateEvent($eventId: eventId!, $userId:Userid!) {
        CreateEvent(eventName: $eventName, userid: $userId) {
            userId
            eventName
          }
      }
`

const CreateEvent = ({navigation, userId}) => {
    const [eventName, setEventName] = useState("Drew's Movie Fest")
    const [createEvent, { data, loading, error }] = useMutation(CREATE_USER_EVENT, { 
        variables: {eventName: eventName, userId: 12345}, 
        onCompleted: () => goToEvent() 
    })

    const goToEvent = () => {
        navigation.navigate("Voting", {eventId: data.JoinEvent.eventId})
    }

    const handleAddEventPress = (e, navigation) => {
        e.preventDefault()
        console.log("create event pressed")
        navigation.navigate("CreateEventView")
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                style={styles.createEventFormContainer}>
                    {/* {console.log(data)} */}
                <View
                    style={styles.inputButtonContainer}>
                    <TextInput
                        style={styles.createEventTextInput}
                        value={eventName}
                        onChangeText={setEventName}
                        placeholder="add event"
                        />
                    <TouchableOpacity
                        title="Create Event"
                        onPress={(e) => handleAddEventPress(e, navigation)}
                        style={styles.createEventButton}>
                        <Text
                            style={styles.createEventButtonText}>
                                +</Text>
                    </TouchableOpacity>
                    {/* {loading && <Text>Creating event...</Text>}
                    {error && <Text>There was a problem creating your event</Text>}
                    {data && <Text>{data.JoinEvent.eventId}</Text>} */}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    createEventFormContainer: {
        justifyContent:"center",
        alignItems:"center",
        height:"30%",
        width:"100%",
        backgroundColor:"#f4f1f1",
    },
    inputButtonContainer: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:"25%"
    },
    createEventTextInput: {
        height:"100%",
        width:250,
        borderRadius:20,
        backgroundColor:"white",
        color:"#858483",
        textAlign:"center",
        margin:20,
    },
    createEventButton: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"75%",
        width:50,
        backgroundColor:"#F37180",
        borderRadius:20,
    },
    createEventButtonText: {
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
        color:"white",
    }
})

export default CreateEvent