import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const PartyGreeting = ({ navigation }) => {

    return(
        <View>
            <Text>
                Welcome to *party name*, *username*!
            </Text>
            <Text>
                Next, you'll be presented with several options. Click on the red button to reject the movie, or the green button to accept it.
            </Text>
            <Text>
                Don't think; just swipe!
            </Text>
            <TouchableOpacity
                title="begin"
                onPress={()=>navigation.navigate("VotingView")}
                style={styles.loginButton}>
                <Text
                    style={styles.buttonText}>
                        Let's Go!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PartyGreeting

const styles = StyleSheet.create({
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
    },
})