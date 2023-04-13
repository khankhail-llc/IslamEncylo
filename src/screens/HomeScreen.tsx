/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.containerStyle}>
      <Text style={{ fontSize: 50, marginTop: 60 }}>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default HomeScreen;
