import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistStore } from "redux-persist";
import { authReducer } from "./authSlice/authSlice";
import eventsReducer from "./events/eventsSlice";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// Persist config for auth
const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState"],
};

const eventsPersistConfig = {
  key: "events",
  storage: storage,
  whitelist: ["events"], // ✅ Now correct since `events` is inside an object
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedEventsReducer = persistReducer(
  eventsPersistConfig,
  eventsReducer
);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  events: persistedEventsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // Make sure to wrap your app with PersistGate in your main file

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
