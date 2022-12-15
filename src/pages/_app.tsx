import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component className="box-border" {...pageProps} />;
};

export default MyApp;
