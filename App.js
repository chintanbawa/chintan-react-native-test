import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store} from 'store';
import {persistor} from 'store/persistor';
import Router from 'router';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider disableContrastText>
          <Router />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
