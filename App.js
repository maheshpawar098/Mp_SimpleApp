import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from './src';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SheetProvider} from 'react-native-actions-sheet';

const App = () => {
  return (
    <SheetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootSiblingParent>
            <AppContainer />
          </RootSiblingParent>
        </PersistGate>
      </Provider>
    </SheetProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
