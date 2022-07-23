import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { Text } from 'react-native';

export default function App() {
  return (
    <Fragment>
      <Text>Hi! React Native!</Text>
      <StatusBar style="auto" />
    </Fragment>
  );
}