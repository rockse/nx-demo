import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Footer } from '@stores/footer';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to brands!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to MS brands!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default CustomApp;
