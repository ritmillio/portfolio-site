import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cursor from '../components/Cursor/Cursor'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'
import LoadingDom from '../components/LoadingDom/LoadingDom'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      {!loading ? (
        <ThemeProvider attribute="class">
          <Cursor />
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <LoadingDom />
      )}
    </>
  )
}

export default MyApp
