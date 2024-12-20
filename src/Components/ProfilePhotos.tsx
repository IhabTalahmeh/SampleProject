import React, { useCallback } from 'react';
import { Animated, View, Dimensions, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';

const TabBarHeight = 48;
const HeaderHeight = 300;
const itemSize = (Dimensions.get('window').width) / 3;

const ProfilePhotos = ({
  scrollY,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  onGetRef,
}: any) => {
  const data = Array.from({ length: 40 }, (_, i) => i);

  const renderPhoto = useCallback(({ item, index }: any) => {
    const isMiddleColumn = index % 3 === 1;
    return (
      <View key={index} style={[{width: itemSize, height: itemSize, borderTopWidth: 1, borderColor: 'white'}, isMiddleColumn ? {borderRightWidth: 1, borderLeftWidth: 1} : null]}>
        <FastImage source={{uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3f7aU7fYHwgYpQjD2qRubn56iqp_Wse3sIg2sBL8iaDm00dAwbmSZk0X1LULE-8NELlml6ogJ02epc76fDud26w'}} style={{width: '100%', height: '100%'}} resizeMode='cover'/>
      </View>
    )
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
      renderItem={renderPhoto}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      bounces={false}
      overScrollMode={Platform.OS === 'android' ? 'never' : 'auto'}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ProfilePhotos;
