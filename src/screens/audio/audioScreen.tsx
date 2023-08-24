import Slider from '@react-native-community/slider';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import {
  SafeAreaView, Text, View, ImageBackground, ScrollView,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BorderImage from '../../assets/images/borderImage/border.png';
import BackGroundImageD from '../../assets/images/coverImages/launchScreen.jpeg';
import BackGroundImageL from '../../assets/images/coverImages/launchScreenL.png';
import audioPath from '../../constants/audioData/audioDataPath.ts';
import getSurahText from '../../constants/codeSplitting/mappingSurahData.ts';
import { VerseData } from '../../constants/surahText/surah_01.ts';
import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';
import { setupPlayer } from '../../utils/trackPlayerServices';

import styles from './style.ts';

function AudioScreen() {
  const navigation = useNavigation();
  const {
    params: { title, surahNo },
  } = useRoute();
  const style = useThemedStyles(styles);
  const theme = useTheme();
  const [isPlay, setIsPlay] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentVerse, setCurrentVerse] = useState(1);
  const [scrollY, setScrollY] = useState(-10);
  const scrollViewRef = useRef(null);
  const verses = useMemo(() => audioPath[surahNo - 1]?.verses || [], [surahNo]);
  const ayahNo = audioPath[surahNo - 1]?.verses[currentVerse - 1]?.ayahNo;
  const handleBackPress = useCallback(() => {
    navigation.goBack();
    TrackPlayer.reset();
  }, [navigation]);
  const handlePlayPress = useCallback(async () => {
    if (isPlay) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlay((prevState) => !prevState);
  }, [isPlay]);

  const initPlayer = useCallback(async () => {
    console.log('initPlayer');
    await TrackPlayer.reset();
    await TrackPlayer.add(verses);
    handlePlayPress();
  }, [handlePlayPress, verses]);

  const setupAndAddPlayer = async () => {
    const isPlayerSetup = await setupPlayer();
    console.log('2nd. setupPlayer audioplayer');
    if (isPlayerSetup) {
      initPlayer();
    }
  };

  useEffect(() => {
    setupAndAddPlayer();

    return () => {
      TrackPlayer.reset();
    };
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
  }, [currentPosition, currentVerse, handlePlayPress]);

  useEffect(() => {
    setScrollY(-10);
  }, [currentVerse]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current && isPlay) {
        const scrollIncrement = 95;
        scrollViewRef.current.scrollTo({
          y: scrollY + scrollIncrement,
          animated: true,
        });
        setScrollY((prevScrollY) => prevScrollY + scrollIncrement);
      }
    }, 12000);
    return () => {
      clearInterval(interval);
    };
  }, [scrollY, isPlay]);

  const handleSkipBackward = useCallback(async () => {
    await TrackPlayer.skipToPrevious();
    setScrollY(-10);
  }, []);

  const handleSkipForward = useCallback(async () => {
    await TrackPlayer.skipToNext();
    setScrollY(-10);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getCurrentVerse = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    const currentData = getSurahText(surahNo)?.find(
      (data: VerseData) => data.verseNumber === currentTrack,
    );

    if (currentData) {
      setCurrentVerse(currentData.verseNumber + 1);
    }
  };

  useEffect(() => {
    getCurrentVerse();
  });
  const backgroundImage = theme.isLightTheme === true ? BackGroundImageL : BackGroundImageD;

  return (
    <ImageBackground source={backgroundImage} style={style.backgroundImage}>
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
        <ImageBackground source={BorderImage} style={style.backgroundImage}>
          <View style={style.bannerView}>
            <View>
              <ScrollView
                ref={scrollViewRef}
                onScroll={(event) => setScrollY(event.nativeEvent.contentOffset.y)}
              >
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
    </ImageBackground>
  );
}

export default AudioScreen;
