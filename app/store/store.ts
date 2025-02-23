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
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session"; // Session storage
import { authReducer } from "./features/authSlice/authSlice";
import eventsReducer from "./features/events/eventsSlice";

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

// Infer types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
