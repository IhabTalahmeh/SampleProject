import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Header from './UserProfileHeader';
import ProfileMoments from './ProfileMoments';
import ProfilePhotos from './ProfilePhotos';
import ProfileVideos from './ProfileVideos';
import Tabs from './Tabs';

const UserProfile = () => {
  const [tabIndex, setIndex] = useState(0);
  const scrollY = useRef<any>(new Animated.Value(0)).current;
  const listRefArr = useRef<any>([]);
  const listOffset = useRef<any>({});
  const isListGliding = useRef<any>(false);

  const tabs = [
    { name: 'moments', title: 'Tab 1', component: ProfileMoments, icon: 'apps-outline' },
    { name: 'photos', title: 'Tab 2', component: ProfilePhotos, icon: 'image-outline' },
    { name: 'videos', title: 'Tab 3', component: ProfileVideos, icon: 'film-outline' },
  ];

  useEffect(() => {
    const listener = scrollY.addListener(({ value }: any) => {
      const currentRoute = tabs[tabIndex].name;
      listOffset.current[currentRoute] = value;
    });

    return () => {
      scrollY.removeListener(listener);
    };
  }, [tabs, tabIndex, scrollY]);

  return (
    <View style={styles.container}>
        <Tabs
          tabs={tabs}
          tabIndex={tabIndex}
          setIndex={setIndex}
          scrollY={scrollY}
          listRefArr={listRefArr}
          listOffset={listOffset}
          isListGliding={isListGliding}
        />
        <Header scrollY={scrollY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserProfile;
