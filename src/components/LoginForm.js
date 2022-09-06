import React, { useState, useContext, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, useWindowDimensions, Alert } from "react-native"
import { useQuery, useMutation, gql } from "@apollo/client"

import AppContext from "./AppContext"

    //          GRAPHQL            //
    const USER_LOGIN_CHECK = gql`
    mutation createUser($input: CreateUserInput!) {
        createUser(input: $input) {
            user {
                id
                name
            }
        }
    }`

    const GET_ALL_EVENTS = gql`
        {
            events {
            name
            date
            status
            userId
            guestId
            movieSelectionId
            }
        }
    `


const LoginForm = ({navigation}) => {
    const globals = useContext(AppContext);
    const [currentUser, setCurrentUser] = useState("")
    const [userNameValue, setUserNameValue] = useState("")
    const [loginError, setLoginError] = useState(false)
    const eventData = useQuery(GET_ALL_EVENTS)    


//          LOGIN                               //  
// 1. 
    const runLogin = (e) => {
        e.preventDefault()
        validateLogin()

        let mappedEvents = eventData.data.events.map((event, index) => {
            if (event.name == "awesomeevent"){
                return {
                    id: index,
                    name: `fuckthisevent ${index}`,
                    host: event.userId,
                    date: event.date,
                    guest: event.guestId,
                    status: event.status,
                    movie: event.movieSelection
                    }
            }
            return {
            id: index,
            name: event.name,
            host: event.userId,
            date: event.date,
            guest: event.guestId,
            status: event.status,
            movie: event.movieSelection
            }
        })

        console.log("-----> EVENTS MAPPED <-----")
        console.log()
        console.log(mappedEvents)
        globals.setAllEvents(mappedEvents)
        console.log()
        console.log("----------------------------------------------------------------------------------------------------")
    };

// 2.
    const validateLogin = () => {
        if (!userNameValue) {
            navigation.navigate("CreateEventView")
            // return Alert.alert("Please enter a username")
        }
        if (userNameValue) {
            console.log("> ...loggin in... <")
            globals.setUserInfo(userNameValue)
            userLogin()
        }
    }
// 3.
    const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN_CHECK, { 
        variables: {"input": {"name": userNameValue }}, 
        onCompleted: (data) => onCompleted(data)
    })
// 4.
    const onCompleted = (data) => {
        console.log()
        console.log("> USER LOGIN SUCCESS! <")
        console.log("Good ol' data: ", data)
        console.log("id: ", data.createUser.user.id)
        console.log("name: ", data.createUser.user.name)
        console.log()

        globals.setCurrentUser(data.createUser.user)
        globals.setLoggedIn(true)
        navigation.navigate("CreateEventView")
        console.log("------------------------------------------------------------------------------------------------")
    }

    // useEffect(() => {
    //     if (!globals.loggedIn){
    //         console.log("useEffect LoginForm: Please enter a username")
    //         return
    //     } else {
    //         console.log(">USER IS LOGGED IN<")
    //         console.log(`You are now logged in, ${globals.userInfo}`)
    //         console.log("----------------")
    //         return
    //     }
    // },[globals.loggedIn])

    // useEffect(() => {
    //     if (!globals.userInfo){
    //         console.log("useEffect LoginForm: No globals.userInfo")
    //         return
    //     } else {
    //         console.log(`GLOBALS.USERINFO: ${globals.userInfo}`)
    //         console.log("----------------")
    //         return
    //     }
    // },[globals.userInfo])

  
    return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View
                    style={styles.loginFormContainer}>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            value={userNameValue}
                            onChangeText={setUserNameValue}
                            placeholder="username"
                            />
                        <TouchableOpacity
                            title="Login"
                            onPress={(e) => runLogin(e)}
                            style={styles.loginButton}>
                            <Text
                                style={styles.buttonText}>
                                    Login</Text>
                        </TouchableOpacity>
                        {/* {loading && <Text>Logging you in...</Text>}
                        {loginError && <Text>User does not exist</Text>}
                        {data && <Text>{data.CreateUser.userName}</Text>} */}
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
    loginButton: {
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

export default LoginForm