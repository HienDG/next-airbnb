import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import modalSlice from "./modalSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [modalSlice.name]: modalSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ReturnType<AppStore["dispatch"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
