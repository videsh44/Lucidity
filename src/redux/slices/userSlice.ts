import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const ADMIN = "admin";
export const USER = "user";
export type UserType = typeof ADMIN | typeof USER;

export interface userStore {
  userType: UserType;
}

const initialState: userStore = {
  userType: ADMIN,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
