import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, Pressable } from 'react-native';


const EventListItem = ({ title, navigation, toggleModal, guest }) => {

    return (
      <TouchableOpacity style={styles.eventButton} onPress={(e) => toggleModal(e, title)}>
        <Text style={{fontSize:20}}>{title}</Text>
      </TouchableOpacity>
    )
}

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
})

export default EventListItem