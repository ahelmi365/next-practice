import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
