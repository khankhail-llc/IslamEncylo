import React from 'react';
import {
  Text, View, Button, Switch,
} from 'react-native';

import useTheme from '../../theming/useTheme.ts';
import useThemedStyles from '../../theming/useThemedStyles.ts';

import styles from './styles.ts';

function HomeScreen() {
  const theme = useTheme();
  const style = useThemedStyles(styles);

  return (
    <View style={style.body}>
      <Text style={style.title}>Home Screen</Text>
      <Text style={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem enim. Etiam
        accumsan nibh eu laoreet sollicitudin. Proin ultricies, metus nec auctor ultricies, dui
        metus vulputate odio, id hendrerit lectus mauris a ex.
      </Text>
      <Text style={style.referralCode}>3XP4N510</Text>
      <Button title="Accept" color={theme.colors.SUCCESS} />
      <Button title="Decline" color={theme.colors.ERROR} />
      <Switch onValueChange={theme.toggleTheme} value={theme.isLightTheme} />
    </View>
  );
}

export default HomeScreen;
