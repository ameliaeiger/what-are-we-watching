//IMPORTS
import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, Dimensions, Modal, Pressable, Alert } from "react-native"

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
  
  const CreateEventView = ( { navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)

    const modal = () => {
      return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
      )}
    
    const toggleModal = (e, title) => {
      //HANDLE EVENT
      e.preventDefault()
      console.log(title)
  
      //NAVIGATE
      // navigation.navigate("PartyView", {
      //   eventTitle:title
      // })

      //SET MODAL VISIBLE STATE "TRUE"
      setModalVisible(true)
    }

    //END

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const {data, loading, error} = useQuery(GET_ALL_EVENTS)

    const getDisplay = () => {
      if (loading){
        return <Text>loading...</Text>
      } else if  (!loading && !error && data) {
        return(
          <EventsList
            data={data}
            toggleModal={toggleModal}
            navigation={navigation} />
          )
      } else {
        return <Text>Oops! There was an error loading the page. Please try again.</Text>
      }
    }

    useEffect(() => {
      console.log(modalVisible)
    },[modalVisible])

    return(
        <View style={{height:windowHeight, width:windowWidth}}>        
          {/* {console.log(data)} */}
            <CreateEvent navigation={navigation}/>
            {getDisplay()}
            {modalVisible && modal()}
        </View>
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
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
