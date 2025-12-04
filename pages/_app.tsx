import '@mantine/core/styles.css';
import '@/globalStyle.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
<<<<<<< HEAD
        <title>LaunchRoot - Business Solutions</title>
=======
        <title>Mantine Template</title>
>>>>>>> origin/master
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
