import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Background from "../componenets/layouts/Background";
import Layout from "../componenets/layouts/Layout";
import "../styles/globals.css";
import store from "../store/store";
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
    </>
  );
}

export default MyApp;
