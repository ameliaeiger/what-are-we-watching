import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useLazyQuery, gql } from "@apollo/client"

    const USER_LOGIN_CHECK = gql`
      {
        events {
        hostId
        guestId
        name
        status
        }
    }
`;

const LoginForm = ({navigation}) => {
    const [username, setUsername] = useState("")

    const [userLogin, { data, loading, error }] = useLazyQuery(USER_LOGIN_CHECK)

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                style={styles.loginFormContainer}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="username"
                        />
                    <TouchableOpacity
                        title="Login"
                        onPress={()=> navigation.navigate('Party')}
                        style={styles.loginButton}>
                        <Text
                            style={styles.buttonText}>
                                Login</Text>
                    </TouchableOpacity>
                    {loading && <Text>Logging you in...</Text>}
                    {error && <Text>User does not exist</Text>}
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