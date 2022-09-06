//IMPORTS
import React, { useEffect, useState, useContext } from "react"
import { View, TouchableOpacity, Text, StyleSheet, Image, Button } from "react-native"
import AppContext from "../components/AppContext.js"

//LIBRARIES
import Swiper from 'react-native-swiper'

//COMPONENTS
import HeroImage from "../components/HeroImage.js"
import Loading from "../components/Loading.js"
import VotingButton from "../components/VotingButton.js"

//APOLLO
import { gql, useQuery } from '@apollo/client'

//GRAPHQL QUERY
const GET_MOVIE_CHUNK = gql`
    query getChunk($eventId: ID!, $lastMovieId: ID!){
        getChunk (eventId: $eventId, lastMovieId: $lastMovieId){
            id
            image
            title
        }
    }`

//VOTING VIEW
const VotingView = ({ navigation }) => {
    
// CONSTANTS
const globals = useContext(AppContext)

    // useEffect(() => {
    //     console.log(globals.currentEvent)
    // },[])

    const onCompleted = (data) => {
        console.log("----------------")
        console.log("> POST COMPLETED <")
        console.log("Good ol' data: ", data)
        // console.log("id: ", data.createUser.user.id)
        // console.log("name: ", data.createUser.user.name)


        // navigation.navigate("CreateEventView")
        console.log("----------------")
    }

    
    // const [currentMovie, setCurrentMovie] = query(movieData.poster_path)
    const [loaded, setLoaded] = useState(false)
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0)
    const [movieChunk, setMovieChunk] = useState(
        [
            {
            id: 1,
            uri: "https://static.wikia.nocookie.net/shrek/images/8/85/Shrek_2001_poster.jpg/revision/latest/scale-to-width-down/1200?cb=20201020072731"
        }, 
            {
            id: 2,
            uri: "https://resizing.flixster.com/dAiS2r0bFgqZ7eBWCH_0NuEb0_4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY0MjE3ZDU3LWFkNzUtNDAxNC04N2I3LWExNWQzNzFlOWEzNC53ZWJw"
        },
            {
            id: 3,
            uri: "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_.jpg"
        },
            {
            id: 4,
            uri: "https://m.media-amazon.com/images/I/81nmtQ6sufL._SY445_.jpg"
        },
            {
            id: 5,
            uri: "https://static.wikia.nocookie.net/dreamworks/images/e/e2/Shrek_5.jpg/revision/latest?cb=20210609030553"
        },
            {
            id: 6,
            uri: "https://m.media-amazon.com/images/M/MV5BY2UzNDc2NWYtOWRmZS00YzQwLWE0NmYtM2NlNWNmYzNmYzAyXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
        },
])

    //GRAPHQL QUERY
    // const [getMovies, { data, loading, error }] = useQuery(GET_MOVIE_CHUNK, { 
    //     variables: {"eventId": eventId, "lastMovieId": lastMovieId },
    //     onCompleted: () => onCompleted(data)
    //     })

    //     const runQuery = () => {
    //             console.log("run query triggered")
    //             // const { data, loading, error } = useQuery(GET_MOVIE_CHUNK, { 
    //             // variables: {"eventId": 0, "lastMovieId": 0 }, 
    //         // })
    //         console.log("loading: ", loading)
    //         console.log("RUN QUERY: ", data)
    //     }
    // })

// GENERATES AND RETURNS STRING CONTAINING URL TO ALL OF A SPECIFIED MOVIE'S DATA
    const getPosterPath = (num) => {
        return "https://api.themoviedb.org/3/movie/" + num.toString() + "?api_key=d68f62b1dd987551ff4793fc96f457f1"
    }

    const fetchImage = (url) => {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
            //    console.log(data)
               return data
            })
    }

    // useEffect(() => {
    //         setLoaded(true)
    // },[currentMovie])

    const getHeroImage = (uri, handleVotePress) => {
        return (
            <HeroImage
            id={Date.now()}
            style={{height:"100%", width:"100%"}}
            // poster={currentMovie}
            navigation={navigation}
            source={{"uri":uri}}
            handleVotePress={handleVotePress}
            />
        )
    }

    const handleVotePress = (e, isTrue) => {
        console.log("current movie index", currentMovieIndex)
        if (currentMovieIndex<6){
            let votingObject = {
                id: movieChunk[currentMovieIndex].id,
                uri: movieChunk[currentMovieIndex].uri,
                vote: isTrue
            }    
            console.log(votingObject)
        }
        if (currentMovieIndex===6){
            console.log("end of chunk")
            return
        }
        setCurrentMovieIndex(currentMovieIndex+1)
    }

    return(
        <>
        <Text style={styles.headerText}>
            You are in: {globals.currentEvent}!</Text>
        {loaded ? 
            <>
            <Swiper style={styles.wrapper} showsButtons={true} loop={false}
            prevButton={<VotingButton getMovies={runQuery} 
            // handleVotePress={handleVotePress}
            text="no" boolVal={false}/>} 
            // nextButton={<VotingButton handleVotePress={handleVotePress} text="yes" boolVal={true}/>}
            >
                <View style={styles.slide1}>
                    {getHeroImage(movieChunk[0].uri, handleVotePress)}
                </View>
                <View style={styles.slide2}>
                    {getHeroImage(movieChunk[1].uri, handleVotePress)}
                </View> 


                {/* <View style={styles.slide3}>
                    {getHeroImage(movieChunk[2].uri)}
                </View>
                <View style={styles.slide3}>
                    {getHeroImage(movieChunk[3].uri)}
                </View>
                <View style={styles.slide3}>
                    {getHeroImage(movieChunk[4].uri)}
                </View>
                <View style={styles.slide3}>
                    {getHeroImage(movieChunk[5].uri)}
                </View> */}

            </Swiper>
            </>
             :
            <Loading />
        }
        </>
    )
}

export default VotingView

const styles = StyleSheet.create({
    headerText: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#92BBD9'
    },
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

