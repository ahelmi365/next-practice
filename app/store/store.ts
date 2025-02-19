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
import storage from "redux-persist/lib/storage";
import { authReducer } from "./features/authSlice/authSlice";
import eventsReducer from "./features/events/eventsSlice";
import sessionStorage from "redux-persist/lib/storage/session"; // ✅ Session storage

// Persist config
const localPersistConfig = {
  key: "persist-root",
  storage,
  whitelist: ["auth"], // ✅ Make sure events are included in persistence
};

// ✅ Persist config for sessionStorage
const sessionPersistConfig = {
  key: "session-root",
  storage: sessionStorage,
  whitelist: ["events"], // ✅ Store 'settings' in session storage
};

const persistedLocalReducer = persistReducer(
  localPersistConfig,
  combineReducers({
    auth: authReducer,
  })
);

const persistedSessionReducer = persistReducer(
  sessionPersistConfig,
  combineReducers({
    events: eventsReducer,
  })
);

// Combine both persisted reducers
const rootReducer = combineReducers({
  local: persistedLocalReducer,
  session: persistedSessionReducer,
});

// const persistedReducer = persistReducer(localPersistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Infer types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
