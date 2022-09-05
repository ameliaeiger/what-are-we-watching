//IMPORTS
import React, { useState, useContext } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"

//LIBRARIES
import { useQuery, useMutation, gql } from "@apollo/client"

//COMPONENTS
import EventsList from "./EventsList"
import AppContext from "./AppContext"

const CREATE_USER_EVENT = gql`
    mutation createEvent($eventId: eventId!, $userId: Userid!, $date: date!) {
        createEvent(input: {name: $name, userId: $userId, date: $date}) {
            date
            userId
            name
        }
    }
`

//GRAPHQL QUERY
const GET_MOVIE_CHUNK = gql`
    query getChunk($eventId: ID!, $lastMovieId: ID!){
        getChunk (eventId: $eventId, lastMovieId: $lastMovieId){
            id
            image
            title
        }
    }`


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
    
    const CreateEvent = ({navigation, userId}) => {
        const globals = useContext(AppContext)
        const [eventName, setEventName] = useState("")

    //      GRAPHQL GET MOVIE CHUNK       //
        //GRAPHQL QUERY
        const { data, loading, error } = useQuery(GET_MOVIE_CHUNK, { 
        // SHOULD NOT BE HARD CODED; needs state
            variables: {"eventId": 2, "lastMovieId": 5 }, 
    })

    // const [createEvent, { data, loading, error }] = useMutation(CREATE_USER_EVENT, { 
    //     variables: {eventName: eventName, userId: 12345}, 
    //     onCompleted: () => goToEvent() 
    // })

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
        console.log(data)


        // const newEvent = {
        //     id: Date.now(),f
        //     eventName
        // }
        // navigation.navigate("CreateEventView")
        // navigation.navigate("VotingView")
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                style={styles.createEventFormContainer}>
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