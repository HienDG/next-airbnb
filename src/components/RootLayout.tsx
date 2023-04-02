import React from "react";
import type { NextPage } from "next";

import { Roboto } from "next/font/google";

import Navbar from "@components/Layout/Navbar";
import Meta from "@components/Meta";
import ModalProvider from "./ModalProvider";

interface RootLayoutProps extends AppLayout.LayoutObject {}

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <div className={roboto.className}>
      <Meta />

      <ModalProvider>
        <Navbar />
        <main>{children}</main>
      </ModalProvider>
    </div>
  );
};

export default RootLayout;
