/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Articles from './src/views/apps/articles';
import Login from './src/views/pages/login';

import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {Provider} from 'react-redux';
import AppNavigation from './src/AppNavigation';
import {store} from './src/store/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
