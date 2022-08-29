//IMPORTS
import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native-web"

//COMPONENTS
import HeroImage from "../components/HeroImage.js"
import Loading from "../components/Loading.js"

//DATA
import movieData from "../../moviedata.js"

const VotingView = ( {navigation} ) => {
    const [allData, setAllData] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setAllData(movieData)
        setLoaded(true)
    },[])

    return(
        <>
        {loaded ? 
            <HeroImage
                poster={allData.poster_path}
                navigation={navigation}
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