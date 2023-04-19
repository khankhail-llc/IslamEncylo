/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyles}>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 50,
    marginTop: 60,
  },
});
export default HomeScreen;
