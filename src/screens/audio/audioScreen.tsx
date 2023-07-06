import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import TrackPlayer, { useTrackPlayerEvents, Event, State } from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BackGroundImage from '../../assets/images/coverImages/launchScreen.png';
import highlightingData from '../../constants/highlightingData/highlightingData.ts';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';
import { setupPlayer, addTracks } from '../../utils/trackPlayerServices';

import styles from './style.ts';

function AudioScreen() {
  const navigation = useNavigation();

  const style = useThemedStyles(styles);
  const theme = useTheme();
  const [isPlay, setIsPlay] = useState(true);

  const words = highlightingData.a_rahman_sudais[1];
  const paragraph = words.map((wordObj) => wordObj.word).join(' ');

  const lines = paragraph.split(' ');
  const wordCountsPerLine = [4, 5, 5, 4, 5, 2];

  const handleBackPress = () => {
    navigation.navigate('Home' as never);
  };

  let wordIndex = 0;

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      const isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  // if (!isPlayerReady) {
  //   return (
  //     <SafeAreaView style={style.activityIndicator}>
  //       <ActivityIndicator size="large" color="#bbb" />
  //     </SafeAreaView>
  //   );
  // }

  return (
    <ImageBackground source={BackGroundImage} style={style.backgroundImage}>
      <SafeAreaView style={style.outerContainer}>
        <View style={style.headerStyle}>
          <Ionicons
            name="arrow-back"
            size={theme.typography.size.L}
            color={theme.colors.SEARCHBAR}
            onPress={handleBackPress}
          />
          <Text style={style.headerText}>Surah Fatiha</Text>
          <View style={style.emtyView} />
        </View>
        <View style={style.bannerView}>
          {wordCountsPerLine.map((count, index) => {
            const lineWords = lines.slice(wordIndex, wordIndex + count);
            wordIndex += count;

            const key = `word_${count}_${index}`;

            return (
              <Text key={key} style={style.surah}>
                {lineWords.join(' ')}
              </Text>
            );
          })}
        </View>
        <View style={style.sliderView}>
          <Slider
            value={0}
            minimumValue={10}
            maximumValue={100}
            thumbTintColor={theme.colors.SEARCHBAR}
          />
        </View>
        <View style={style.player}>
          <Entypo name="shuffle" size={30} color={theme.colors.SEARCHBAR} />
          <AntDesign name="banckward" size={35} color={theme.colors.SEARCHBAR} />
          <Icon
            name={isPlay ? 'play' : 'pause'}
            size={35}
            color={theme.colors.SEARCHBAR}
            onPress={() => {
              TrackPlayer.play();
              setIsPlay(false);
            }}
          />
          <AntDesign name="forward" size={35} color={theme.colors.SEARCHBAR} />
          <Feather name="repeat" size={35} color={theme.colors.SEARCHBAR} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default AudioScreen;
