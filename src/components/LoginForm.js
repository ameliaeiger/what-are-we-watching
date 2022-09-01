import React, { useState, useContext } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, useWindowDimensions, Alert } from "react-native"
import { useMutation, gql } from "@apollo/client"
import AppContext from "./AppContext"

    const USER_LOGIN_CHECK = gql`
    mutation CreateUser($userName: userName!) {
        CreateUser(userName: $userName) {
            userName
            userId
        }
    }
`

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

const LoginForm = ({navigation}) => {
    const globals = useContext(AppContext);
    const [userNameValue, setUserNameValue] = useState("")
    const [loginError, setLoginError] = useState(false)

    const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN_CHECK, { 
        variables: {userName: userNameValue}, 
        onCompleted: () => runLogin() 
    })

    const runLogin = () => {
        if (globals.setLoggedIn){
            navigation.navigate("CreateEventView", {userData: (userData.find((user) => user.userName === userNameValue))})
        } else if (userData.find((user) => user.userName === userNameValue)) {
            globals.setLoggedIn(true)
            globals.setUserInfo(userData.find((user) => user.userName === userNameValue))
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
                            onPress={() => runLogin()}
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