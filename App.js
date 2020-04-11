import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartView from './components/StartView';
import NewGameView from './components/NewGameView';
import ScoreView from './components/ScoreView';
import ContinueView from './components/ContinueView';
import { persistor, store } from './store/ConfigureStore'; // See for what
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    let persistor = persistStore(store)
    const Stack = createStackNavigator();
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Start"
              screenOptions={{
                title: '7 Wonder duel score',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#e3cfad',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}>
              <Stack.Screen name="Start" component={StartView} />
              <Stack.Screen name="New" component={NewGameView} />
              <Stack.Screen name="Continue" component={ContinueView} />
              <Stack.Screen name="Score" component={ScoreView} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

//  <ScoreView />
//  <NewGameView />
//  <ContinueView />
//  <StartView />
