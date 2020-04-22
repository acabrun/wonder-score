import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StatusBar, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartView from './components/StartView';
import NewGameView from './components/NewGameView';
import ScoreView from './components/ScoreView';
import ContinueView from './components/ContinueView';
import CheckScore from './components/CheckScore';
//import Store from './store/ConfigureStore';
import {persistor, store} from './store/ConfigureStore'; // See for what
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';

export default class App extends Component {
  // Hide staus bar
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    let persistor = persistStore(store);
    const Stack = createStackNavigator();
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            {/* --------HEADER BAR-------- */}
            <Stack.Navigator
              initialRouteName="Start"
              screenOptions={{
                title: 'Wonders Score',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#518668',
                },
                headerTintColor: '#fbe899',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}>
              {/* --------ROUTE VIEW--------- */}
              <Stack.Screen name="Start" component={StartView} />
              <Stack.Screen name="New" component={NewGameView} />
              <Stack.Screen name="Continue" component={ContinueView} />
              <Stack.Screen
                name="Score"
                component={ScoreView}
              />
              <Stack.Screen name="CheckScore" component={CheckScore} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
