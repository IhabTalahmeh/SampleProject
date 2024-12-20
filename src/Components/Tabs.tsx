import React from 'react';
import { Dimensions, Animated, View, StyleSheet, Text } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';

const TabBarHeight = 48;
const HeaderHeight = 300;

const Tabs = ({
  tabs,
  tabIndex,
  setIndex,
  scrollY,
  listRefArr,
  listOffset,
  isListGliding,
}: any) => {

  const renderLabel = ({ route, focused }: any) => {
    const iconName = route.icon;
    return (
      <Ionicons
        name={iconName}
        size={24}
        color={focused ? theme.colors.black : theme.colors.gray}
        style={{ opacity: focused ? 1 : 0.5 }}
      />
    );
  };


  const renderTabBar = (props: any) => {
    const translateY = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [HeaderHeight, 0],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={[
          styles.tabBarContainer,
          { transform: [{ translateY }] },
        ]}
      >
        <TabBar
          {...props}
          onTabPress={({ route, preventDefault }) => {
            if (isListGliding.current) {
              preventDefault();
            }
          }}
          style={styles.tabBar}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
      </Animated.View>
    );
  };

  const renderScene = ({ route }: any) => {
    const TabComponent = tabs.find((tab: any) => tab.name === route.key)?.component;
    if (!TabComponent) return null;

    return (
      <TabComponent
        scrollY={scrollY}
        onMomentumScrollBegin={() => {
          isListGliding.current = true;
        }}
        onMomentumScrollEnd={() => {
          isListGliding.current = false;
          syncScrollOffset();
        }}
        onScrollEndDrag={() => {
          syncScrollOffset();
        }}
        onGetRef={(ref: any) => {
          if (ref) {
            const exists = listRefArr.current.some(
              (list: any) => list.key === route.key
            );
            if (!exists) {
              listRefArr.current.push({ key: route.key, value: ref });
            }
          }
        }}
      />
    );
  };

  const syncScrollOffset = () => {
    const currentRouteKey = tabs[tabIndex].name;
    listRefArr.current.forEach((item: any) => {
      if (item.key !== currentRouteKey) {
        if (scrollY.__getValue() < HeaderHeight && scrollY.__getValue() >= 0) {
          if (item.value) {
            item.value.scrollToOffset({
              offset: scrollY.__getValue(),
              animated: false,
            });
            listOffset.current[item.key] = scrollY.__getValue();
          }
        } else if (scrollY.__getValue() >= HeaderHeight) {
          if (
            listOffset.current[item.key] < HeaderHeight ||
            listOffset.current[item.key] == null
          ) {
            if (item.value) {
              item.value.scrollToOffset({
                offset: HeaderHeight,
                animated: false,
              });
              listOffset.current[item.key] = HeaderHeight;
            }
          }
        }
      }
    });
  };

  return (
    <TabView
      navigationState={{
        index: tabIndex,
        routes: tabs.map((tab: any) => ({ key: tab.name, title: tab.title, icon: tab.icon })),
      }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      initialLayout={{
        width: Dimensions.get('window').width,
        height: 0,
      }}
      swipeEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: 'red'
  },
  tabBar: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: theme.colors.white,
    height: TabBarHeight,
  },
  indicator: {
    backgroundColor: theme.colors.black,    
  },
  label: {
    fontSize: 16,
    color: theme.colors.black,
  },
});

export default Tabs;
