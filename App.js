import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})