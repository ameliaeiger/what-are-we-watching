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
`;

const CreateEvent = ({navigation, userId}) => {
    const [eventName, setEventName] = useState("Drew's Movie Fest")

    // const [createEvent, { data, loading, error }] = useMutation(CREATE_USER_EVENT, { 
    //     variables: {eventName: eventName, userId: 12345}, 
    //     onCompleted: () => goToEvent() 
    // })

    // const goToEvent = () => {
    //     navigation.navigate("Voting", {eventId: data.JoinEvent.eventId})
    // }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                style={styles.loginFormContainer}>
                    {/* {console.log(data)} */}
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={eventName}
                        onChangeText={setEventName}
                        placeholder="username"
                        />
                    <TouchableOpacity
                        title="Login"
                        onPress={()=>navigation.navigate("Voting")}
                        style={styles.eventButton}>
                        <Text
                            style={styles.buttonText}>
                                Create Event</Text>
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
    loginFormContainer: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"90%",
        width:"100%",
        backgroundColor:"#f4f1f1",
    },
    textInput: {
        height:50,
        width:200,
        borderRadius:20,
        backgroundColor:"white",
        color:"#858483",
        textAlign:"center"
    },
    eventButton: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:50,
        backgroundColor:"#F37180",
        borderRadius:20,
        marginTop:10
    },
    buttonText: {
        textAlign:"center",
    }
})

export default CreateEvent