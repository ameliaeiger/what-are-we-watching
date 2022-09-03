import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"
import EventsList from "./EventsList"
import { useMutation, gql } from "@apollo/client"

const CREATE_USER_EVENT = gql`
    mutation createEvent($eventId: eventId!, $userId: Userid!, $date: date!) {
        createEvent(input: {name: $name, userId: $userId, date: $date}) {
            date
            userId
            name
        }
    }
`
    // mutation {
    //     createEvent(input: {
    //         date: "9/1/2022",
    //         name: "Parker",
    //         userId: 1
    //     }) {
    //         event {
    //             date
    //             name
    //             userId
    //     }
    //         errors
    //     }
    // }

    // mutation {
    //     createEvent(input: {
    //       date: "9/1/2022",
    //       name: "Parker",
    //       $userId:Userid!
    //     }) {
    //       event {
    //         date
    //         name
    //         userId
    //       }
    //       errors
    //     }
    //   }
    
    // mutation CreateEvent($eventId: eventId!, $userId:Userid!) {
    //     CreateEvent(eventName: $eventName, userid: $userId) {
    //         userId
    //         eventName
    //     }
    // }

    // {
    //     "data": {
    //         "CreateUser": {
    //             "userName": "User2",
    //             "userId": "211270"
    //         }
    //     }
    // }

    const CreateEvent = ({navigation, userId}) => {
    const [eventName, setEventName] = useState("")
    const [createEvent, { data, loading, error }] = useMutation(CREATE_USER_EVENT, { 
        variables: {eventName: eventName, userId: 12345}, 
        onCompleted: () => goToEvent() 
    })

    const goToEvent = () => {
        navigation.navigate("Voting", {eventId: data.JoinEvent.eventId})
    }

    const handleEventInput = (text) => {
        console.log('input', text)
        setEventName(text)
    }

    const handleAddEventPress = (e, navigation) => {
        e.preventDefault()
        console.log("create event pressed")
        const newEvent = {
            id: Date.now(),
            eventName
        }
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
                    {/* <EventsList data={data}/> */}
                    {loading && <Text>Creating event...</Text>}
                    {error && <Text>There was a problem creating your event</Text>}
                    {data && <Text>{data.JoinEvent.eventId}</Text>}
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