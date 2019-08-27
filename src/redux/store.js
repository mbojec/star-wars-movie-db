import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from "redux-thunk";
import {networkReducer, localReducer} from "./";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, logger];

const rootReducer = combineReducers({
  local: localReducer,
  network: networkReducer
});

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['network'],
  whitelist: ['local']
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export {store, persistor};