//IMPORTS
import React, { useState, useContext, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"

//APOLLO
import { useQuery, useMutation, gql } from "@apollo/client"

//COMPONENTS
import EventsList from "./EventsList"
import AppContext from "./AppContext"

//GRAPHQL MUTATION
const CREATE_USER_EVENT = gql`
    mutation createEvent($input: CreateEventInput!) {
        createEvent(input: $input) {
            event {
                date
                name
                userId
            }
        }
    }`

// const GET_MOVIE_CHUNK = gql`
//     query getChunk($eventId: ID!, $lastMovieId: ID!){
//         getChunk (eventId: $eventId, lastMovieId: $lastMovieId){
//             id
//             image
//             title
//         }
//     }`

//CREATE EVENT
const CreateEvent = ({navigation, userId}) => {
    const globals = useContext(AppContext)
    const [eventName, setEventName] = useState("")
    const [isClicked, setIsClicked] = useState(false)
    // const movieData = useQuery(GET_MOVIE_CHUNK)


    //GRAPHQL MUTATION/POST REQUEST
    const [createEvent, {data, loading, error}] = useMutation(CREATE_USER_EVENT, {
        variables:{"input": {"date": "2022-09-05", "name": eventName, "userId": parseInt(globals.currentUser.id)}},
        onCompleted: (response) => onCompleted(response)
    })

    const onCompleted = (response) => {
        console.log('45', "completed")
        console.log('46', response)
    }

    const runCreateEvent = () => {
        setIsClicked(true)
        if (!eventName) {
            console.log("Please enter your event name")
        } else {
            console.log("run create event triggered line 53")
            console.log('54', globals.userInfo)
            console.log('55', globals.currentUser)
            console.log('55', globals.allEvents)
            createEvent()
        }
    }

    // useEffect(() => {
    //    // globals.allEvents
    //         console.log('63', eventName)
    //     },[isClicked])



    //      GRAPHQL GET MOVIE CHUNK       //
        //GRAPHQL QUERY
        // const { data, loading, error } = useQuery(GET_MOVIE_CHUNK, { 
        // SHOULD NOT BE HARD CODED; needs state
    //         variables: {"eventId": 2, "lastMovieId": 5 }, 
    // })

    const handleEventInput = (text) => {
        console.log('input', text)
        setEventName(text)
    }

    const handleAddEventPress = (navigation) => {
        console.log("create event pressed")
        console.log('79', eventData.data)
        // console.log(events)


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
                        onPress={() => runCreateEvent()}
                        style={styles.createEventButton}>
                        <Text
                            style={styles.createEventButtonText}>
                                +</Text>
                    </TouchableOpacity>
                    {/* <EventsList data={data}/>  */}
                    {/* {loading && <Text>Creating event...</Text>}
                    {error && <Text>There was a problem creating your event</Text>} */}
                    {/* {data && <Text>{data.JoinEvent.eventId}</Text>} */}
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