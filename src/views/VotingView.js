//IMPORTS
import React, { useEffect, useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native"

//LIBRARIES
import Swiper from 'react-native-swiper'

//COMPONENTS
import HeroImage from "../components/HeroImage.js"
import Loading from "../components/Loading.js"

//DATA
import movieData from "../../moviedata.js"

const VotingView = ({ navigation }) => {
    const [movieChunk, setMovieChunk] = useState(
        [
            "https://static.wikia.nocookie.net/shrek/images/8/85/Shrek_2001_poster.jpg/revision/latest/scale-to-width-down/1200?cb=20201020072731", 
            "https://resizing.flixster.com/dAiS2r0bFgqZ7eBWCH_0NuEb0_4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY0MjE3ZDU3LWFkNzUtNDAxNC04N2I3LWExNWQzNzFlOWEzNC53ZWJw",
            "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_.jpg",
            "https://m.media-amazon.com/images/I/81nmtQ6sufL._SY445_.jpg",
            "https://static.wikia.nocookie.net/dreamworks/images/e/e2/Shrek_5.jpg/revision/latest?cb=20210609030553",
            "https://m.media-amazon.com/images/M/MV5BY2UzNDc2NWYtOWRmZS00YzQwLWE0NmYtM2NlNWNmYzNmYzAyXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    ])
    const [currentMovie, setCurrentMovie] = useState(movieData.poster_path)
    const [loaded, setLoaded] = useState(false)


// GENERATES AND RETURNS STRING CONTAINING URL TO ALL OF A SPECIFIED MOVIE'S DATA
    const getPosterPath = (num) => {
        return "https://api.themoviedb.org/3/movie/" + num.toString() + "?api_key=d68f62b1dd987551ff4793fc96f457f1"
    }

    const fetchImage = (url) => {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
               console.log(data)
               return data
            })
    }

    useEffect(() => {
            setLoaded(true)
    },[currentMovie])

    const getHeroImage = (uri) => {
        return (
            <HeroImage
            style={{height:"100%", width:"100%"}}
            poster={currentMovie}
            navigation={navigation}
            source={{"uri":uri}}
         />
        )
    }
    console.log(movieData.poster_path)
    return(
        <>
        {loaded ? 
            <>
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    {getHeroImage(movieChunk[0])}
                </View>
                <View style={styles.slide2}>
                    {getHeroImage(movieChunk[1])}
                </View> 
                <View style={styles.slide3}>
                    {getHeroImage(movieChunk[2])}
                </View>
                <View style={styles.slide3}>
                    {getHeroImage(movieChunk[3])}
                </View>
                <View style={styles.slide3}>
                    {getHeroImage(movieChunk[4])}
                </View>
                <View style={styles.slide3}>
                    {getHeroImage(movieChunk[5])}
                </View>

            </Swiper>
            <TouchableOpacity
                style={styles.buttonNo}>
                <Text>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonYes}>
                <Text>Yes</Text>
            </TouchableOpacity>
            </>
             :
            <Loading />
        }
        </>
    )
}

export default VotingView

const styles = StyleSheet.create({
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
    wrapper: {

    },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})