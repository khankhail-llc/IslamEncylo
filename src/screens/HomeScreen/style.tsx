import { StyleSheet } from 'react-native';

import COLORS from '../../colors/myColors.tsx';

const styles = StyleSheet.create({
  circleImage: {
    borderRadius: 50,
    height: 50,
    justifyContent: 'space-between',
    width: 50,
  },
  container: {
    flex: 1,
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  inputStyles: {
    borderColor: COLORS.GRAY,
    borderRadius: 30,
    borderWidth: 2,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    marginBottom: 16,
    marginHorizontal: 10,
    padding: 10,
  },
  loginStyles: {
    fontSize: 16,
  },
  tabBarStyle: {
    borderTopColor: COLORS.GRAY,
    borderTopWidth: 1,
    height: 100,
    paddingTop: 9,
  },
  textStyles: {
    fontSize: 50,
    marginTop: 60,
  },
});
export default styles;
