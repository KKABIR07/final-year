import { configureStore } from "@reduxjs/toolkit";
import StateReducer from "./Features/States/StateSlice"
export const store = configureStore({
  reducer: {
    Stateval : StateReducer,
  },
})