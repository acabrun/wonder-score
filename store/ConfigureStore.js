import { createStore } from 'redux'
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


import saveGame from './reducers/SaveGameReducer'


// export default createStore(saveGame)



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, saveGame)

// //export default createStore(persistCombineReducers(rootPersistConfig, {saveGame}))

// // export default () => {
// //     const store = createStore(persistedReducer)
// //     const persistor = persistStore(store)
// //     return { store, persistor }
// //   }

  export  const store = createStore(persistedReducer)
  export  const persistor = persistStore(store)
