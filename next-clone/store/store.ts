import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import feelingSlice from "./modules/feeling";
import userSlice from "./modules/user";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      feeling: feelingSlice,
      user: userSlice,
    },
    devTools: process.env.NODE_ENV === "development",
  });
  return store;
};

const store = makeStore();

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
