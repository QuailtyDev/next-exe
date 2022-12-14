import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';

import { AuthProvider } from '@app/hooks/auth-context';
import { UserProvider } from '@app/hooks/user-context';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>MUI + Next.js</title>
      </Head>
      <UserProvider initialUser={pageProps.user}>
        <AuthProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AuthProvider>
      </UserProvider>
    </>
  );
}
