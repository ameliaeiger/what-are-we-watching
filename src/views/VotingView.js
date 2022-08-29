//IMPORTS
import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native-web"

//COMPONENTS
import HeroImage from "../components/HeroImage.js"
import Loading from "../components/Loading.js"

//DATA
import movieData from "../../moviedata.js"

const VotingView = () => {
    const [allData, setAllData] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setAllData(movieData)
        setLoaded(true)
    },[])

    const heroImageView = () => {
        <View 
        // style={styles.heroImageViewContainer}
        >
            <HeroImage poster={allData.poster_path}/>
        </View>
    }

    return(
        <>
        {loaded ? 
            <HeroImage
                poster={allData.poster_path}
             /> :
            <Loading />
        }
        </>
    )
}

const styles = StyleSheet.create({
    heroImageViewContainer: {
        display:"flex",
        justifyContent:"center"
    },
})

export default VotingView