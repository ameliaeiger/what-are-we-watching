import React, { useState, useContext, useEffect } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, useWindowDimensions, Alert } from "react-native"
import { useMutation, gql } from "@apollo/client"
import AppContext from "./AppContext"

const userData = [
    {
        "userName": "User1",
        "userId": "211269"
    },
    {
        "userName": "User2",
        "userId": "216944"
    },
    {
        "userName": "User3",
        "userId": "420244"
    },
    {
        "userName": "LOOK-AT-THIS",
        "userId": "420699"
    },
]

const USER_LOGIN_CHECK = gql`
mutation createUser($input: CreateUserInput!){
    createUser(input: $input) {
        user {
            id
            name
        }
    }
}`
   



const LoginForm = ({navigation}) => {
    const globals = useContext(AppContext);
    const [currentUser, setCurrentUser] = useState("")
    const [userNameValue, setUserNameValue] = useState("")
    const [loginError, setLoginError] = useState(false)

const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN_CHECK, { 
        variables: {"input": {"name": globals.userInfo }}, 
        // onCompleted: () => navigation.navigate("CreateEventView") 
        onCompleted: () => testInfo(data)
    })

    const testInfo = (data) => {
        console.log("POST SENT")
        navigation.navigate("CreateEventView")
        console.log("RESPONSE: ", data)
        console.log("----------------")
    }

    const runLogin = (e) => {
        // let isUser = userData.find((user) => user.userName === userNameValue)
        if (!userNameValue) {
            return Alert.alert("Please enter a username")
        }
        if (userNameValue) {
            console.log("TEXT INPUT FIELD VALUE: ", userNameValue)
            globals.setUserInfo(userNameValue)
            globals.setLoggedIn(true)
            // userLogin()
        }
        // if (globals.setLoggedIn && userNameValue) {
            // console.log("USER LOGIN TRIGGERED")
        // }
     //}
    //    if (globals.setLoggedIn){
    //         navigation.navigate("CreateEventView")
    //     } else {
    //         setLoginError(true)
    //     }
    }
     
            
    //         {
    //     name: 
    //     }) {
    //         user {
    //         name
    //         id
    //         }
    //         errors
    //     }
    // }
    // `

    useEffect(() => {
        console.log("useEffect: --", userNameValue)
    },[userNameValue])

    useEffect(() => {
        if (!globals.loggedIn){
            console.log("Please log in.")
        } else {
            userLogin()
            console.log("----------------")
            console.log("USER LOGIN TRIGGERED")
            console.log(`You are now logged in, ${globals.userInfo}`)
        }
    },[globals.loggedIn])

  
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