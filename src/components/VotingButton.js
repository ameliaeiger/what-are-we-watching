import React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"

const VotingButton = ({ getMovies, handleVotePress, text, boolVal }) => {
    return (
        <>
        <TouchableOpacity
            title={text}
            // onPress={(e) => handleVotePress(e, boolVal)}
            onPress={(e) => getMovies(e)}
            // style={styles.buttonNo}
            >
            <Text>{text}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
            title="yes"
            onPress={(e) => handleVotePress(e, true)}
            style={styles.buttonYes}>
            <Text>Yes</Text>
        </TouchableOpacity> */}
        </>
    )
}

export default VotingButton

const styles = StyleSheet.create({
    buttonNo: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:100,
        width:100,
        backgroundColor:"red",
        opacity:.8,
        position:"absolute",
        bottom:15,
        left:"15%",
        borderRadius:100,
    },
    buttonYes: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:100,
        width:100,
        backgroundColor:"green",
        opacity:.8,
        position:"absolute",
        bottom:15,
        right:"15%",
        borderRadius:100,
    },
})