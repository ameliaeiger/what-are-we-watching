import React, { useState, useContext } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, useWindowDimensions, Alert } from "react-native"
import { useMutation,  gql } from "@apollo/client"
import AppContext from "./AppContext"

    const USER_LOGIN_CHECK = gql`
    mutation createUser($name: name!) {
        createUser(input: {name: $name}) {
            name
            userId
        }
    }
    `
// user {
//     name
//   }
//   errors

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
]

// {
//     "userName": "User2"
//   }

const LoginForm = ({navigation}) => {
    const globals = useContext(AppContext);
    const [currentUser, setCurrentUser] = useState("")
    const [userNameValue, setUserNameValue] = useState("")
    const [loginError, setLoginError] = useState(false)

    const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN_CHECK, { 
        variables: {"userName": globals.userNameValue }, 
        onCompleted: () => navigation.navigate("CreateEventView") 
    })

    const runLogin = (e) => {
        console.log('initial login value', globals.setLoggedIn)
    //  if (globals.setLoggedIn === false) {
    // if (userData.find((user) => user.userName === userNameValue)) 
        console.log('login trigger')
        globals.setLoggedIn(true)
        globals.setUserInfo(userNameValue)
        userLogin()
        console.log('falsey', globals)
     //}
       if (globals.setLoggedIn){
            navigation.navigate("CreateEventView")
        } else {
            setLoginError(true)
        }
    }

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
                        {loading && <Text>Logging you in...</Text>}
                        {loginError && <Text>User does not exist</Text>}
                        {data && <Text>{data.CreateUser.userName}</Text>}
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