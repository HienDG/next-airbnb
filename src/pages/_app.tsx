import '@src/styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from "next";

import RootLayout from "@components/RootLayout";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
