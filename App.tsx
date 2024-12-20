
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserProfile from './src/Components/UserProfile';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <UserProfile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
