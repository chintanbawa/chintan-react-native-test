import {persistStore} from 'redux-persist';

export let persistor;

export function persistStoreDevice(store) {
  persistor = persistStore(store);
  return persistor;
}
