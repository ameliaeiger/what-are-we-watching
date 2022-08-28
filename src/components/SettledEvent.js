import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const SettledEvent = ({ date }) => (
  <View style={styles.settled}>
    <Text style={styles.settledDate}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  settled: {
    backgroundColor: '#F37180',
    padding: 5,
    marginVertical: 8,
    display: "flex",
    alignItems: "center"
  },
  settledDate: {
    fontSize: 32
  },
});

export default SettledEvent;