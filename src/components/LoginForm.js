import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useMutation, gql } from "@apollo/client"

    const USER_LOGIN_CHECK = gql`
    mutation CreateUser($userName: userName!) {
        CreateUser(userName: $userName) {
            userName
            userId
        }
    }
`;

const LoginForm = ({navigation}) => {
    const [userNameValue, setUserNameValue] = useState("")

    const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN_CHECK, { 
        variables: {userName: userNameValue}, 
        onCompleted: () => runLogin() 
    })

    const runLogin = () => {

        navigation.navigate("Party", {userId: data.CreateUser.userId})
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                style={styles.loginFormContainer}>
                    {console.log(data)}
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={userNameValue}
                        onChangeText={setUserNameValue}
                        placeholder="username"
                        />
                    <TouchableOpacity
                        title="Login"
                        onPress={()=>navigation.navigate("CreateEventView")}
                        style={styles.loginButton}>
                        <Text
                            style={styles.buttonText}>
                                Login</Text>
                    </TouchableOpacity>
                    {loading && <Text>Logging you in...</Text>}
                    {error && <Text>User does not exist</Text>}
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