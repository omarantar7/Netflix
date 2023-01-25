import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import ListReducer from "./List";

const store = configureStore({
  reducer: { auth: authReducer, List: ListReducer, },
});

export default store;
