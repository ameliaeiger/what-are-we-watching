import React, { useEffect, useState } from "react"
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native"

const HeroImage = ({poster, navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [image, setImage] = useState("")


    useEffect(() => {
        setImage(
            {
                uri: `https://image.tmdb.org/t/p/original/${poster}`
            }
        )
    },[])

    return (
        <View
            style={styles.heroImageContainer}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate("Results")}>
                <Image
                    style={{height:windowHeight, width:windowWidth}}
                    source={image}
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