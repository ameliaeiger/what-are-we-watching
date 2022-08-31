//IMPORTS
import React, { useEffect, useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

//LIBRARIES
import Swiper from 'react-native-swiper'

//COMPONENTS
import HeroImage from "../components/HeroImage.js"
import Loading from "../components/Loading.js"

//DATA
import movieData from "../../moviedata.js"

const VotingView = ({ navigation }) => {
    const [movieChunk, setMovieChunk] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
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

    const loadImages = () => {
        return (
            <HeroImage
            poster={currentMovie}
            navigation={navigation}
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
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            {/* <HeroImage
                poster={movieData.poster_path}
                navigation={navigation}
             /> */}
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
    wrapper: {},
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