import React, { useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"

const Result = () => {
    // const [result, setResult] = useState({})
    return(
        <>
            {/* <Header /> */}
            <View
                style={styles.resultContainer}>
                <View>
                <Text
                        style={styles.titleText}>
                    Congratulations! Your party chose...
                </Text>
                <Image
                        style={styles.imageResult}>
                    
                </Image>
                <Text
                        style={styles.resultText}>
                    SHREK 2!!!
                </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"80%",
        backgroundColor:"#f4f1f1"
    },
    titleText: {
        fontSize:20,
        color:"#544E50"
    },
    imageResult: {
        width: 200, 
        height: 300
    },
    resultText: {
        fontSize:50,
        color:"#F37180"
    }
})


export default Result