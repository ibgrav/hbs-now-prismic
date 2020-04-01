import Head from 'next/head';

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>HBS Now Prismic Example</title>
        <script type="text/javascript" src="/setup.js"></script>
        <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js?new=true"></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;