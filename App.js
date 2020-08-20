import React from 'react';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
