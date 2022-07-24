import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'jumogehn';
  return (
    <View style={styles.container}>
      {name === 'jumogehn' && (
        <Text style={styles.text}>My name is jumogehn H!!</Text>
      )}
      {name !== 'jumogehn' && (
        <Text style={styles.text}>My name is NOT jumogehn H!!</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

