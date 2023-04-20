import React from 'react';
import {
  View, Text, SafeAreaView, TextInput, Image, ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import CircleImage from '../../../assets/circle-image.png';
import launchScreen from '../../../assets/launchScreen.png';

import styles from './style.tsx';

function HomeScreen() {
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Quran </Text>
      <Image source={CircleImage} style={styles.circleImage} />
    </View>
  );
  const rendersearchbar = () => (
    <View style={styles.searchContainer}>
      <Feather name="search" size={24} color="#fff" style={styles.icon} />
      <TextInput style={styles.inputStyles} placeholderTextColor="#fff" placeholder="Search" />
      <Feather name="mic" size={24} color="#fff" style={[styles.icon, styles.micIcon]} />
    </View>
  );

  return (
    <ImageBackground source={launchScreen} style={styles.background}>
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        {rendersearchbar()}
      </SafeAreaView>
    </ImageBackground>
  );
}
export default HomeScreen;
