import css from "styled-jsx/css";
import fetch from "isomorphic-unfetch";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body : {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default MyApp;
