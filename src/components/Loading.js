import React from "react"
import { Text, View, StyleSheet } from "react-native"

const Loading= () => {
    return (
        <View
            style={styles.loadingContainer}>
            <Text
                style={styles.loadingText}>
                LOADING
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height: 100,
        width:"100%",
    },
    loadingText: {
        color:"#F37180"
    }
})


export default Loading