import { createSlice } from "@reduxjs/toolkit";

const initialWay = localStorage.getItem("isloged");

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "", islogeddIn: initialWay },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload;
    },
    userLoggedIn(state) {
      state.islogeddIn = !!state.token;
      localStorage.setItem("isloged", state.islogeddIn);
    },
    logoutHandler(state) {
      state.islogeddIn = false;
      localStorage.removeItem("isloged");
      localStorage.removeItem("Token");
    },
  },
});

export const Authactions = authSlice.actions;

export default authSlice.reducer;
