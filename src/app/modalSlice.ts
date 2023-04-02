import { createSlice } from "@reduxjs/toolkit";
import type { AnyAction } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { ModalType, ModalSliceObject } from "types/modalSlice";
import type { AppState } from "./store";

const initialState: ModalSliceObject = {
  isOpen: {
    menu: false,
    auth: false,
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

    toggleModal(state, action: PayloadAction<ModalType>) {
      const modalKey = action.payload;
      const currentState = state.isOpen[modalKey];

      state.isOpen[modalKey] = !currentState;
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

export const { openModal, closeModal, toggleModal } = modalSlice.actions;

export const selectedMenuModal = (state: AppState) => state.modal.isOpen["menu"];
export const selectedAuthModal = (state: AppState) => state.modal.isOpen["auth"];

export default modalSlice;
