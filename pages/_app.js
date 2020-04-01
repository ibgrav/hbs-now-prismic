import Head from 'next/head';

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>HBS Now Prismic Example</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;