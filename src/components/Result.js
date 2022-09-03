import React, { useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import ThumbnailImage from "./ThumbnailImage"

const Result = () => {
    //const [result, setResult] = useState({})
    return(
        <>
            <View
                style={styles.resultContainer}>
                <View>
                    <Text
                        style={styles.titleText}>
                        Congratulations! Your party chose...
                    </Text>
                    <Image
                        style={styles.imageResult}>
                        source={ThumbnailImage}
                    </Image>
                    <Text
                        style={styles.resultText}>
                        {data && <Text>{data.movieId}</Text>}
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
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:20,
        color:"#544E50"
    },
    imageResult: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width: 200, 
        height: 300
    },
    resultText: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:50,
        color:"#F37180"
    }
})

export default Result