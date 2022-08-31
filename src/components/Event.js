import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const Event = ({ title, navigation, guest }) => (
  <View style={styles.event}>
    <TouchableOpacity style={styles.eventTitle} onPress={()=>navigation.navigate("Voting")}>
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

export default Event;