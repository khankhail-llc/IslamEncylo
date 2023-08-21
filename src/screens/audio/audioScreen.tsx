import Slider from '@react-native-community/slider';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  SafeAreaView, Text, View, ImageBackground, ScrollView,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BackGroundImage from '../../assets/images/borderImage/border.png';
import audioPath from '../../constants/audioData/audioDataPath.ts';
import getSurahText from '../../constants/codeSplitting/mappingSurahData.ts';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';
import { setupPlayer } from '../../utils/trackPlayerServices';

import styles from './style.ts';

function AudioScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { title, surahNo } = route.params;
  const style = useThemedStyles(styles);
  const theme = useTheme();
  const [isPlay, setIsPlay] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentVerse, setCurrentVerse] = useState(1);
  const verses = useMemo(() => audioPath[surahNo - 1]?.verses || [], [surahNo]);
  const ayahNo = audioPath[surahNo - 1]?.verses[currentVerse - 1]?.ayahNo;
  const handleBackPress = useCallback(() => {
    navigation.goBack();
    TrackPlayer.reset();
  }, [navigation]);

  const handlePlayPress = useCallback(async () => {
    // Check if the player is initialized before calling play/pause
    if (isPlay) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlay((prevState) => !prevState);
  }, [isPlay]);

  // Effect to run the player setup
  useEffect(() => {
    async function setupAndAddPlayer() {
      try {
        await setupPlayer();
        await TrackPlayer.reset();
        await TrackPlayer.add(verses);
        handlePlayPress();
      } catch (error) {
        console.error('Error during setup and adding tracks:', error);
      }
    }

    setupAndAddPlayer();
  }, []);

  useEffect(() => {
    let isMounted = true;

    const updatePosition = async () => {
      const newPosition = await TrackPlayer.getPosition();
      const newDuration = await TrackPlayer.getDuration();
      if (isMounted) {
        setCurrentPosition(newPosition);
        setDuration(newDuration);
        setTimeout(updatePosition, 1500);
      }
    };

    updatePosition();

    return () => {
      isMounted = false;
    };
  }, [currentPosition, currentVerse]);

  const handleSkipBackward = useCallback(async () => {
    await TrackPlayer.skipToPrevious();
  }, []);

  const handleSkipForward = useCallback(async () => {
    await TrackPlayer.skipToNext();
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getCurrentVerse = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    const currentData = getSurahText(surahNo)?.find((data) => data.verseNumber === currentTrack);

    if (currentData) {
      setCurrentVerse(currentData.verseNumber + 1);
    }
  };

  useEffect(() => {
    getCurrentVerse();
  });

  return (
    <SafeAreaView style={style.outerContainer}>
      <View style={style.headerStyle}>
        <Ionicons
          name="arrow-back"
          size={theme.typography.size.L}
          color={theme.colors.SEARCHBAR}
          onPress={handleBackPress}
        />
        <Text style={style.headerText}>{title}</Text>
        <View />
      </View>
      <ImageBackground source={BackGroundImage} style={style.backgroundImage}>
        <View style={style.bannerView}>
          <View>
            <ScrollView>
              <Text style={style.surah}>
                {getSurahText(surahNo)?.map((wordObj) => (
                  <React.Fragment key={wordObj.id}>
                    {ayahNo === wordObj.verseNumber && (
                    <Text>
                      {wordObj.ayah}
                      {' '}
                    </Text>
                    )}
                  </React.Fragment>
                ))}
              </Text>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>

      <View style={style.sliderView}>
        <Slider
          style={style.sliderStyle}
          value={currentPosition}
          minimumValue={0}
          maximumValue={duration}
          onValueChange={(value) => TrackPlayer.seekTo(value)}
          thumbTintColor={theme.colors.SEARCHBAR}
          minimumTrackTintColor={theme.colors.SEARCHBAR}
          maximumTrackTintColor={theme.colors.TEXT_SECONDARY}
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
