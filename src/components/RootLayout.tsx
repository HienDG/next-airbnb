import React, { Fragment } from "react";
import type { NextPage } from "next";

import { Roboto } from "next/font/google";

import Navbar from "@components/Layout/Navbar";
import Meta from "@components/Meta";

interface RootLayoutProps extends AppLayout.LayoutObject {}

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <div className={roboto.className}>
      <Meta />

      <Fragment>
        <Navbar />
        <main>{children}</main>
      </Fragment>
    </div>
  );
};

export default RootLayout;
