import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import authReducer from "@modules/auth/reducers";

const peresistConfig = {
  key: "root",
  storage: AsyncStorage,
  // storage,
  timeout: null,
  whitelist: ["authReducer"],
  blacklist: [],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(peresistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));

let persistor = persistStore(store);

export { store, persistor };
