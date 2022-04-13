import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Next.js app</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
