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


const GET_ALL_EVENTS = gql`
  {
        events {
        hostId
        guestId
        name
        status
        }
  }
`

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      date: 'August 31st',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      date: 'September 12th',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      date: 'September 22nd',
    },
  ]

  const CreateEventView = ({ navigation }) => {
    const myContext = useContext(AppContext)
    // console.log("CreateEventView Context: ", myContext.userInfo)
    const [modalVisible, setModalVisible] = useState(false)
    const [blurOn, setBlurOn] = useState(false)
    const [eventName, setEventName] = useState("")
    const {data, loading, error} = useQuery(GET_ALL_EVENTS)
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    // const [getEvents, { data, loading, error }] = useQuery(GET_ALL_EVENTS)
    
    // useEffect(() => {
    //   getEvents()
    // },[])

    const handleGoToPartyPress = (e, navigation) => {
      e.preventDefault()
      setModalVisible(!modalVisible)
      navigation.navigate("VotingView")
    }

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
                  onPress={(e) => handleGoToPartyPress(e, navigation)}
                >
                  <Text style={styles.textStyle}>Let's Go!</Text>
                </TouchableOpacity>                
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    
    const toggleModal = (e, title) => {
      //HANDLE EVENT
      e.preventDefault()
      console.log(`go to ${title} pressed`)
      setEventName(title)
  
      //NAVIGATE
      // navigation.navigate("PartyView", {
      //   eventTitle:title
      // })

      //SET MODAL VISIBLE STATE "TRUE"
      setModalVisible(true)
    }

    //END

    const getDisplay = () => {
      // console.log(data)
      // if (loading){
      //   return <Text>loading...</Text>
      // } else if  (!loading && !error && data) {
        return(
          <EventsList
            // data={data}
            toggleModal={toggleModal}
            navigation={navigation} />
          )
      // } else {
      //   return <Text>Oops! There was an error loading the page. Please try again.</Text>
      // }
    }

    useEffect(() => {
      // console.log("modal visible use effect: ", modalVisible)
      toggleBlur()
    },[modalVisible])

    const toggleBlur = () => {
      if (modalVisible){
        // console.log("visible")
        setBlurOn("blurContainer")
      } else {
        // console.log("hidden")
        setBlurOn("blurContainerHidden")
      }
    }

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
