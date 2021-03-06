import Router from "next/router";
import { useEffect, useState } from "react";
import { NotificationContainer } from "react-notifications";
import Auth from "~components/Auth/Auth";
import { reduxWrapper } from "~redux/reduxStore";
import "../assets/scss/style.scss";
import Layout from "../components/core/Layout";
import Loader from "../components/Loader";
import { GlobalHeaderProvider } from "../context/GlobalHeaderContext";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    Router.onRouteChangeStart = (url) => {
      setLoader(true);
    };
    Router.onRouteChangeComplete = (url) => {
      setLoader(false);
    };
    Router.onRouteChangeError = (err, url) => {
      setLoader(false);
    };
  }, []);

  if (loader) {
    return <Loader show={loader} />;
  }

  return (
    <Auth>
      <GlobalHeaderProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalHeaderProvider>
      <NotificationContainer />
    </Auth>
  );
};

export default reduxWrapper.withRedux(App);
