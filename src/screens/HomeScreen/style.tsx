import { StyleSheet } from 'react-native';

import COLORS from '../../colors/myColors.tsx';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
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
    color: COLORS.WHITE,
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  icon: {
    marginRight: 10,
  },
  inputStyles: {
    color: COLORS.WHITE,
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  loginStyles: {
    fontSize: 16,
  },
  micIcon: {
    position: 'absolute',
    right: 10,
  },
  searchContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.TEXTINPUT,
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabBarStyle: {
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
