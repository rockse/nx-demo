import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Header } from '@stores/header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
      <Head>
        <title>Welcome to account!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to account!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
