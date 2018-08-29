import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { RootStack } from './src/Navigation';
import store from './src/redux/store'

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)

export default App;
