import React, { useEffect, useState } from "react"
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from "react-native"

const HeroImage = ({source, navigation, handleVotePress}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    // const [image, setImage] = useState("")


    // useEffect(() => {
    //     setImage(
    //         {
    //             uri: `https://image.tmdb.org/t/p/original/${poster}`
    //         }
    //     )
    // },[])

    return (
        <View
            style={styles.heroImageContainer}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate("Results")}>
                <Image
                    style={{height:windowHeight, width:windowWidth}}
                    source={source}
                     />
                </TouchableOpacity>
                <TouchableOpacity
                title="no"
                onPress={(e) => handleVotePress(e, false)}
                style={styles.buttonNo}>
                <Text>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="yes"
                onPress={(e) => handleVotePress(e, true)}
                style={styles.buttonYes}>
                <Text>Yes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    heroImageContainer: {
        display:"flex",
        alignItems:"center",
        width:"100%"
    },
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


export default HeroImage