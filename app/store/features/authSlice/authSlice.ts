import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isLoggedIn: boolean;
  userInfo: {
    username: string;
    password: string;
  };
}

const initialState: IAuthState = {
  isLoggedIn: false,
  userInfo: {
    username: "",
    password: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },

    setUserInfo: (state, action: PayloadAction<IAuthState["userInfo"]>) => {
      state.userInfo = action.payload;
    },
    resetAuth: () => {
      return initialState;
    },
  },
});

export const { setIsLoggedIn, setUserInfo, resetAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
