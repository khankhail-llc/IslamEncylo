import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Text, View, ImageBackground,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BackGroundImage from '../../assets/images/borderImage/border1.png';
import highlightingData from '../../constants/highlightingData/highlightingData.ts';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';
import MediaPlayer from '../../utils/MediaPlayer.ts';

import styles from './style.ts';

const mediaPlayer = MediaPlayer.getInstance();

function AudioScreen() {
  const navigation = useNavigation();

  const style = useThemedStyles(styles);
  const theme = useTheme();
  const [isPlay, setIsPlay] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentVerse, setCurrentVerse] = useState(1);

  const handleBackPress = () => {
    navigation.navigate('Home' as never);
  };

  useEffect(() => {
    async function setup() {
      await mediaPlayer.setup();

      const queue = await TrackPlayer.getQueue();
      if (mediaPlayer.isSetup && queue.length <= 0) {
        await mediaPlayer.addTracks();
      }
    }

    setup();
  }, []);

  useEffect(() => {
    const updatePosition = setInterval(async () => {
      const {
        currentPosition: playerPosition,
        currentDuration,
      } = await mediaPlayer.getPlayerState();
      setCurrentPosition(playerPosition);
      setDuration(currentDuration);
    }, 1000);

    return () => clearInterval(updatePosition);
  }, []);

  const handlePlayPress = async () => {
    if (isPlay) {
      await mediaPlayer.pause();
    } else {
      await mediaPlayer.play();
    }
    setIsPlay(!isPlay);
  };

  const handleSkipBackward = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const handleSkipForward = async () => {
    await mediaPlayer.skipToNext();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getCurrentVerse = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    const currentData = highlightingData.a_rahman_sudais[1].find(
      (data) => data.verseNumber === currentTrack,
    );
    if (currentData) {
      setCurrentVerse(currentData.verseNumber + 1);
    }
  };

  useEffect(() => {
    getCurrentVerse();
  }, [currentPosition]);

  return (
    <SafeAreaView style={style.outerContainer}>
      <View style={style.headerStyle}>
        <Ionicons
          name="arrow-back"
          size={theme.typography.size.L}
          color={theme.colors.SEARCHBAR}
          onPress={handleBackPress}
        />
        <Text style={style.headerText}>Surah Fatiha</Text>
        <View />
      </View>
      <ImageBackground source={BackGroundImage} style={style.backgroundImage}>
        <View style={style.bannerView}>
          <View style={style.textContainer}>
            <Text style={style.surah}>
              {highlightingData.a_rahman_sudais[1].map((wordObj, index) => {
                const isPlayingWord = currentPosition >= wordObj.startTime
                && currentPosition <= wordObj.endTime;
                const isCurrentAyah = currentVerse === wordObj.verseNumber;

                return (
                  <React.Fragment key={wordObj.id}>
                    <Text
                      style={[
                        isPlayingWord && isCurrentAyah
                        && style.highlightedWord,
                        isCurrentAyah && !isPlayingWord
                        && style.highlightedVerse,
                      ]}
                    >
                      {wordObj.word}
                    </Text>
                    {index < highlightingData.a_rahman_sudais[1].length - 1 && <Text> </Text>}
                  </React.Fragment>
                );
              })}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={style.sliderView}>
        <Slider
          style={style.sliderStyle}
          value={currentPosition}
          minimumValue={0}
          maximumValue={duration}
          onValueChange={(value) => mediaPlayer.seekTo(value)}
          thumbTintColor={theme.colors.SEARCHBAR}
          minimumTrackTintColor={theme.colors.SEARCHBAR}
          maximumTrackTintColor={theme.colors.SEARCHBARCONTAINER}
        />
        <View style={style.timerContainer}>
          <Text style={style.timerStyle}>{formatTime(currentPosition)}</Text>
          <Text style={style.timerStyle}>{formatTime(duration)}</Text>
        </View>
      </View>
      <View style={style.player}>
        <AntDesign
          name="banckward"
          size={32}
          color={theme.colors.SEARCHBAR}
          onPress={handleSkipBackward}
        />
        <Icon
          name={isPlay ? 'pause' : 'play'}
          size={32}
          color={theme.colors.SEARCHBAR}
          onPress={handlePlayPress}
        />
        <AntDesign
          name="forward"
          size={32}
          color={theme.colors.SEARCHBAR}
          onPress={handleSkipForward}
        />
      </View>
    </SafeAreaView>
  );
}

export default AudioScreen;
