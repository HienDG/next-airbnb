import React from "react";
import type { NextPage } from "next";

import { Roboto } from "next/font/google";

import Navbar from "@components/Layout/Navbar";
import Meta from "@components/Meta";
import AuthModal from "@components/modal/AuthModal";

interface RootLayoutProps extends AppLayout.LayoutObject {}

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <div className={roboto.className}>
      <Meta />

      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <AuthModal />
    </div>
  );
};

export default RootLayout;
