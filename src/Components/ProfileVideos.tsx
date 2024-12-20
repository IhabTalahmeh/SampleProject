import React, { useCallback } from 'react';
import { Animated, View, StyleSheet, Dimensions, Platform, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../styles/theme';

const TabBarHeight = 48;
const HeaderHeight = 300;
const itemSize = (Dimensions.get('window').width) / 3;

const ProfileVideos = ({
  scrollY,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  onGetRef,
}: any) => {
  const data = Array.from({ length: 40 }, (_, i) => i);

  const renderVideo = useCallback(({ item, index }: any) => {
    const isMiddleColumn = index % 3 === 1;
    const resizeMode = item.height > itemSize ? 'cover' : 'contain';

    return (
      <View
        key={index}
        style={[
          {
            width: itemSize,
            height: itemSize * 1.5,
            borderTopWidth: 1,
            borderColor: 'white',
            backgroundColor: 'black',
          },
          isMiddleColumn ? { borderRightWidth: 1, borderLeftWidth: 1 } : null,
        ]}
      >
        <View style={{ flex: 1 }}>
          <FastImage
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/800px-Cat_November_2010-1a.jpg', priority: FastImage.priority.high, cache: FastImage.cacheControl.immutable }}
            style={{ width: '100%', height: '100%' }}
            resizeMode={resizeMode}
          />

          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 50,
            }}
          />
          <View
            style={[
              styles.videoPlayTimesContainer,
              {
                position: 'absolute',
                bottom: 10,
                left: 10,
                flexDirection: 'row',
                alignItems: 'center',
              },
            ]}
          >
            <FontAwesome6 name="eye" color={theme.colors.white} size={11} />
            <Text style={styles.playTimes}>2,234</Text>
          </View>
        </View>
      </View>
    );
  }, []);


  return (
    <Animated.FlatList
      numColumns={3}
      ref={onGetRef}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScrollEndDrag={onScrollEndDrag}
      onMomentumScrollEnd={onMomentumScrollEnd}
      contentContainerStyle={{
        paddingTop: HeaderHeight + TabBarHeight,
        minHeight: Dimensions.get('window').height + HeaderHeight - TabBarHeight - 20,
      }}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderVideo}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      bounces={false}
      overScrollMode={Platform.OS === 'android' ? 'never' : 'auto'}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 16,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
  playTimes: {
    color: 'white',
    fontSize: 11,
    marginLeft: 5,
  },
  videoPlayTimesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 8,
    left: 8
  }
});

export default ProfileVideos;
