import React, { useEffect, useState } from "react"
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from "react-native"

//COMPONENTS
import VotingButton from "./VotingButton"

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
        </View>
    )
}

const styles = StyleSheet.create({
    heroImageContainer: {
        display:"flex",
        alignItems:"center",
        width:"100%"
    },
})


export default HeroImage