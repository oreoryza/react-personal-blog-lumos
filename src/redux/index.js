import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./async/postsSlice";
import themeReducer from "./slices/themeSlice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['posts'],
  };

const persistedTheme = persistReducer(persistConfig, themeReducer);

const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: persistedTheme
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };