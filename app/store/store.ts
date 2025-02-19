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
import sessionStorage from "redux-persist/lib/storage/session"; // Session storage

// Persist each slice individually
const authPersistedReducer = persistReducer(
  { key: "auth", storage },
  authReducer
);
const eventsPersistedReducer = persistReducer(
  { key: "events", storage: sessionStorage },
  eventsReducer
);

// Combine all persisted reducers
const rootReducer = combineReducers({
  auth: authPersistedReducer,
  events: eventsPersistedReducer,
});

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
