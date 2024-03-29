import { configureStore } from "@reduxjs/toolkit";
import Slices from "./SliceChat";
import SliceEntr from "./SliceEntr";
// import SliceEntrMobOrEmail from "./SliceEntrMobOrEmail";

export const store = configureStore({
  reducer: {
    sliceChat: Slices,
    sliceNavMenu: Slices,
    sliceSmile: Slices,
    sliceIsEntr: SliceEntr,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
