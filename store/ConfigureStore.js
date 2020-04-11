import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import saveGame from './reducers/SaveGameReducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, saveGame)

//export default createStore(persistCombineReducers(rootPersistConfig, {saveGame}))

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }

  export  const store = createStore(persistedReducer)
  export  const persistor = persistStore(store)
