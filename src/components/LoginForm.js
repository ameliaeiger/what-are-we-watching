import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native"

const LoginForm = ({navigation}) => {
    const [username, setUsername] = useState("username")

    return(
        <View
            style={styles.loginFormContainer}>
            <View>
                <TextInput
                    style={styles.textInput}
                    value={username}
                    onChangeText={setUsername}
                    />
                    <TouchableOpacity
                        style={styles.loginButton}>
                        <Text
                            style={styles.buttonText}>
                                Login</Text>
                    </TouchableOpacity>
                    <Button
                        title="Go to Party"
                        onPress={() => navigation.navigate('Party')}
                    />
            </View>
        </View>
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