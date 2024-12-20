import React from 'react';
import { Animated, Text, StyleSheet, View } from 'react-native';
import theme from '../styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderHeight = 300;

const Header = ({ scrollY }: any) => {
  const translateY = scrollY.interpolate({
    inputRange: [0, HeaderHeight],
    outputRange: [0, -HeaderHeight],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Ionicons name="home" color="black" size={30} />
        <Text>Header Component</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    height: HeaderHeight,
    width: '100%',
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  followCircle: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(237, 235, 250, 0.5)",
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white'
  },
  followNumber: {
    color: theme.colors.black,
  },
  followText: {
    fontSize: 10,
  },
  profilePictureLinear: {
    padding: 3,
    borderRadius: 100
  },
  profilePictureIconButton: {
    position: 'absolute',
    end: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.colors.extraLightGray,
  },
  nameText: {
    textAlign: 'center',
    fontSize: 20,
    color: theme.colors.black,
  },
  tabs: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  profilePicture: {
    width: 100,
    height: 100
  },
  mh20: {
    marginHorizontal: 20
  },
  profilePictureProps: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 100,
  },
  lockedProfileContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: theme.colors.divider,
    marginTop: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    flex: 1,
  }

});

export default Header;
