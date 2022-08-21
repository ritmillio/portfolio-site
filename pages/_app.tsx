import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cursor from '../components/Cursor/Cursor'
import { ThemeProvider } from 'next-themes'
import React, { useState, useEffect, useRef } from 'react'
import LoadingDom from '../components/LoadingDom/LoadingDom'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000); //todo 3000

  }, []);

  return (
    <>
      {!loading ? (
        <ThemeProvider attribute="class">
          <Cursor />
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <ThemeProvider attribute="class">
          <LoadingDom />
        </ThemeProvider>
      )}
    </>
  )
}

export default MyApp
