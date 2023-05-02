import React from 'react';
import { TextInput, ImageBackground, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import BackGroundImage from '../../../assets/launchScreen.png';
import COLORS from '../../colors/myColors.tsx';
import renderParaList from '../itemsList/parahList.tsx';
import renderSurahList from '../itemsList/surahList.tsx';
import Header from '../screenHeader/header.tsx';

import styles from './style.tsx';

type Route = {
  key: string;
  title: string;
};

function HomeScreen(): JSX.Element {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    { key: 'first', title: 'Juzz' },
    { key: 'second', title: 'Surah' },
  ]);

  const searchBar = () => (
    <View style={styles.searchBarContainer}>
      <View style={styles.iconContainer}>
        <EvilIcons name="search" size={24} color={COLORS.WHITE} />
      </View>
      <TextInput
        style={styles.SearchBarStyle}
        placeholder="search"
      />
      <View style={[styles.iconContainer, styles.voiceIconStyle]}>
        <MaterialIcons name="keyboard-voice" size={24} color={COLORS.WHITE} />
      </View>
    </View>
  );

  // render scenes
  const renderScene = SceneMap({
    first: renderParaList,
    second: renderSurahList,
  });

  return (
    <ImageBackground source={BackGroundImage} style={styles.backgroundImage}>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.container}>{searchBar()}</View>
        <View style={styles.tabsConatiner}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                activeColor={COLORS.WHITE}
                inactiveColor={COLORS.GREY}
                style={styles.tabViewStyle}
                indicatorStyle={styles.indicatorStyle}
              />
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
export default HomeScreen;
