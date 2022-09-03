import React from "react"
import { View, Image, StyleSheet } from "react-native"

const ThumbnailImage = () => {

    return(
        < View 
            style={styles.container}>
            <Image
                style={styles.image}
                source={{"https://static.wikia.nocookie.net/shrek/images/8/85/Shrek_2001_poster.jpg/revision/latest/scale-to-width-down/1200?cb=20201020072731"}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"80%",
        backgroundColor:"#f4f1f1"
    },
    image: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width: 200, 
        height: 300
    }
})


export default ThumbnailImage