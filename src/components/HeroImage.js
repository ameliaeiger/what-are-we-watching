import React, { useEffect, useState } from "react"
import { View, StyleSheet, Image, Dimensions } from "react-native"

const HeroImage = ({poster}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [image, setImage] = useState("")

    useEffect(() => {
        setImage(
            {
                uri: `https://image.tmdb.org/t/p/original/${poster}`
            }
        )
    },[poster])

    return (
        <View
            style={styles.heroImageContainer}>
                <Image
                    style={{height:windowHeight, width:windowWidth}}
                    source={image} />
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