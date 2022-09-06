//IMPORTS
import React, { useEffect, useState, useContext } from "react"
import { Text, View, StyleSheet, Dimensions, Modal, Alert, TouchableOpacity } from "react-native"
import AppContext from "../components/AppContext.js";

//ADDITIONAL LIBRARIES
import { BlurView } from 'expo-blur';

//COMPONENTS
import CreateEvent from "../components/CreateEvent.js"
import EventsList from "../components/EventsList.js"

//APOLLO
import { useQuery, gql } from "@apollo/client"

//GRAPHQL
// const GET_ALL_EVENTS = gql`
// {
//   events {
//     name
//     date
//     status
//     userId
//     guestId
//     movieSelectionId
//   }
// }
// `

//CREATE EVENT VIEW
  const CreateEventView = ({ navigation }) => {
    const globals = useContext(AppContext)
    const [modalVisible, setModalVisible] = useState(false)
    const [blurOn, setBlurOn] = useState(false)
    const [eventName, setEventName] = useState("")
    const [userEvent, setUserEvent] = useState("")

    // const {data, loading, error} = useQuery(GET_ALL_EVENTS)
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    // const [getEvents, { data, loading, error }] = useQuery(GET_ALL_EVENTS)
    
    // useEffect(() => {
    //   getEvents()
    // },[])


    //NAVIGATES TO VOTINGVIEW
    const confirmPartyPress = (e, navigation, title) => {
      e.preventDefault()
      setModalVisible(!modalVisible)
      globals.setCurrentEvent(title)
      navigation.navigate("VotingView")
    }
    //PROMPTS MODAL
    const listItemClick = (e, event, title) => {
      setModalVisible(true)
      console.log(`go to ${title} pressed`)
      setEventName(title)
      setUserEvent(event)

      // globals.setCurrentEvent(event)
  }

  useEffect(() => {
    if (userEvent){
    console.log("---------------------- > USER JOINED EVENT < ----------------------")
    console.log(userEvent)
    console.log("-----------------------------------------------------------------")
    }
  },[userEvent])

    const modal = () => {
      return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            style={{backgroundColor: 'rgba(52, 52, 52, 0.3)', opacity:.5}}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Welcome to {eventName}!</Text>
                <Text style={{marginBottom:20}}>Ready to get started?</Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonConfirm]}
                  onPress={(e) => confirmPartyPress(e, navigation, eventName)}
                >
                  <Text style={styles.textStyle}>Let's Go!</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
    )}

    const getDisplay = () => {
      // if (loading){
      //   return <Text>loading...</Text>
      // } else if  (!loading && !error && data) {
        return(
          <EventsList
            click={listItemClick}
            navigation={navigation} />
          )
    }

    useEffect(() => {
      console.log(modalVisible)
    },[modalVisible])

    const toggleBlur = () => {
      if (modalVisible){
        setBlurOn("blurContainer")
      } else {
        setBlurOn("blurContainerHidden")
      }
    }

    // useEffect(() => {
      // console.log("GLOBALS: ", globals.allEvents)
    // },[globals.allEvents])

    return(
      <BlurView intensity={100} tint="dark" style={`styles.${blurOn}`}>
        <View style={{height:windowHeight, width:windowWidth}}>   
            <CreateEvent navigation={navigation}/>
            {getDisplay()}
            {modalVisible && modal()}
        </View>
      </BlurView>
    )
}

export default CreateEventView

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  blurContainerHidden: {
    display:"none",
    borderWidth:5,
    height:"100%",
    width:"100%",
    position:"absolute",
    top:0,
  },
  blurContainer: {
    display:"flex",
    borderWidth:5,
    height:"100%",
    width:"100%",
    position:"absolute",
    top:0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:60,
    borderRadius: 25,
    borderWidth:3,
    elevation: 5
  },
  buttonClose: {
    width:175,
    opacity:.7,
    backgroundColor: "#544E50",
  },
  buttonConfirm: {
    width:175,
    marginBottom:10,
    backgroundColor:"#F37180",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center"
  },
})
