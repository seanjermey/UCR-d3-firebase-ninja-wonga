import React from "react";
import App from "next/app";
import $ from "jquery";
import "materialize-css/sass/materialize.scss";

if (typeof window !== "undefined") {
  window["$"] = $;
  window["jQuery"]! = $;
  require("materialize-css");
}

const _App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

_App.getInitialProps = async (ctx) => {
  const props = await App.getInitialProps(ctx);

  return { ...props };
};

export default _App;
