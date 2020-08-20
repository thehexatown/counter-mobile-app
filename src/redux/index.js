import {applyMiddleware, combineReducers, createStore} from 'redux';
import CounterReducer from './counter/reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';

const rootReducer = combineReducers({
  counterReducer: CounterReducer
});

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['counterReducer'],
  // blacklist: ['reducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));
let persistor = persistStore(store);
export {store, persistor};
