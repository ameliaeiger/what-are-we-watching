import React from "react"
import { Text, View, StyleSheet } from "react-native"

const Header = () => {
    return (
        <View
            style={styles.headerContainer}>
            <Text
                style={styles.headerText}>
                waww ?
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"10%",
        width:"100%",
    },
    headerText: {
        color:"#F37180"
    }
})


export default Header