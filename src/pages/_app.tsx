import { Provider } from "react-redux";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

import RootLayout from "@components/RootLayout";
import { wrapper } from "@src/app/store";

const App: NextPage<AppProps> = ({ Component, ...restProps }) => {
  const { store, props: pageProps } = wrapper.useWrappedStore(restProps);

  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
};

export default App;
