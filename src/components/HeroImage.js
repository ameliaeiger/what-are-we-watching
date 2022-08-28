import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, Image } from "react-native"

const HeroImage = ({poster}) => {
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
                    style={{height:100, width:100}}
                    source={image} />
        </View>
    )
}

const styles = StyleSheet.create({
    heroImageContainer: {
        display:"flex",
    },
})


export default HeroImage