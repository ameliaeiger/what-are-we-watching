import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const EventListItem = ({ title, navigation, guest }) => (
  <View style={styles.event}>
    <TouchableOpacity style={styles.eventTitle} onPress={()=>navigation.navigate("PartyView")}>
      <Text>{title}</Text>
      {guest === 'nil' && <Text>Join Event</Text>}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  event: {
    backgroundColor: '#F37180',
    padding: 5,
    marginVertical: 8,
    display: "flex",
    alignItems: "center",
    width: "40%"

  },
  eventTitle: {
    fontSize: 16
  },
});

export default EventListItem