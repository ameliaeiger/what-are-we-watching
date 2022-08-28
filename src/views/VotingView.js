import React, { useEffect, useState } from "react"

import Header from "../components/Header.js"
import HeroImage from "../components/HeroImage.js"
import Loading from "../components/Loading.js"

const VotingView = ({data}) => {
    const [allData, setAllData] = useState("")
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setAllData(data)
        setLoaded(true)
    },[data])

    return(
        <>
        <Header />
        {loaded ? 
            <HeroImage
                // poster={data.poster_path}
             /> :
            <Loading />
        }
        </>
    )
}

export default VotingView