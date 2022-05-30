import Header from "../components/Header";

const MyApp = ({ Component, pageProps }) => {
  // Component는 불러오는 페이지, 여기서는 pages/indexjsx를 의미함
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* pageProps는 pages안의 파일에서 getServerSideProps, getStaticProps 혹은 getInitialProps로 페이지에 전달해주는 props다 */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Noto Sans, Noto Sans KR;
        }
      `}</style>
    </>
  );
};

export default MyApp;
