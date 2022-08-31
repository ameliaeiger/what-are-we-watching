import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const EventListItem = ({ title, navigation, guest }) => (
    <TouchableOpacity style={styles.eventButton} onPress={()=>navigation.navigate("PartyView")}>
      <Text style={{fontSize:20}}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  eventButton: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#F37180",
    height:50,
    width:350,
    margin:10,
    borderRadius:20
  },
});

export default EventListItem