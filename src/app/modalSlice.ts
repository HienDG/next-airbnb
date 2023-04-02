import { createSlice } from "@reduxjs/toolkit";
import type { AnyAction } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { ModalType, ModalSliceObject } from "types/modalSlice";

const initialState: ModalSliceObject = {
  isOpen: {
    menu: false,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<ModalType>) {
      const modalKey = action.payload;
      state.isOpen[modalKey] = true;
    },

    closeModal(state, action: PayloadAction<ModalType>) {
      const modalKey = action.payload;
      state.isOpen[modalKey] = false;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action["payload"],
      };
    }),
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;
