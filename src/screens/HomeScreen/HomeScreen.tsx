/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Text, SafeAreaView, TextInput, Image,
} from 'react-native';
import Entypoicon from 'react-native-vector-icons/Entypo';

import CircleImage from '../../../assets/circle-image.png';

import styles from './style.tsx';

function HomeScreen() {
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Quran </Text>
      <Image source={CircleImage} style={styles.circleImage} />
    </View>
  );
  const rendersearchbar = () => (
    <TextInput
      style={styles.inputStyles}
      placeholderTextColor="#000"
      placeholder="Search"
    />
  );
  const renderaicon = () => (
    <Entypoicon name="video=camera" size={26} color="red" />

  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {rendersearchbar()}
      {renderaicon()}

    </SafeAreaView>
  );
}
export default HomeScreen;
