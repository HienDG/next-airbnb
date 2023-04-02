import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

interface AppProviderProps extends AppLayout.LayoutObject {}

const AppProvider: NextPage<AppProviderProps> = ({ children }) => {
  return <div>AppProvider</div>;
};

export default AppProvider;
