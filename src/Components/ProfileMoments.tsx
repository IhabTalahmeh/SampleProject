import React, { useCallback } from 'react';
import { Animated, View, StyleSheet, Dimensions, Text, Platform } from 'react-native';

const TabBarHeight = 48;
const HeaderHeight = 300;

const ProfileMoments = ({
  scrollY,
  onMomentumScrollBegin,
  onMomentumScrollEnd,
  onScrollEndDrag,
  onGetRef,
}: any) => {
  const data = Array.from({ length: 200 }, (_, i) => i);

  const renderMoment = useCallback(({ item, index }: any) => {
    return (
      <View key={item.id} style={styles.item}>
        <Text style={styles.itemText}>Item {index + 1}</Text>
      </View>
    )
  }, []);

  return (
    <Animated.FlatList
      numColumns={1}
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
        minHeight: Dimensions.get('window').height - TabBarHeight,
      }}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderMoment}
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
    height: 60,
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ProfileMoments;
