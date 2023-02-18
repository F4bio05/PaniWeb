/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root} >
      <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,

  }
});

export default App;