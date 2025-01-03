import "@/styles/globals.css";
import "@/styles/navbar.css";

import Layout from "../components/layout";
import { Provider } from "react-redux";
import store from "@/redux/store";
import AnalyticsScripts from "./AnalyticsScripts";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
      <AnalyticsScripts />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
