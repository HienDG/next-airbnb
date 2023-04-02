import React, { Fragment } from "react";
import type { NextPage } from "next";

import AuthModal from "@components/modal/AuthModal";

import { useAppSelector } from "@src/hooks";

import { selectedAuthModal } from "@src/app/modalSlice";

interface ModalProviderProps extends AppLayout.LayoutObject {}

const ModalProvider: NextPage<ModalProviderProps> = ({ children }) => {
  const isAuthModalOpen = useAppSelector(selectedAuthModal);

  return (
    <div>
      <Fragment>{children}</Fragment>
      <Fragment>{isAuthModalOpen ? <AuthModal /> : null}</Fragment>
    </div>
  );
};

export default ModalProvider;
