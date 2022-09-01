import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginState: (state, action) => {
      state.username = action.payload.username;
    },
    setUserSignOut: (state) => {
      state.username = null;
    },
  },
});

export const { setUserLoginState, setUserSignOut } = userSlice.actions;

export const selectUsername = (state) => state.user.username;

export default userSlice.reducer;
