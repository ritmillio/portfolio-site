import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cursor from '../components/Cursor/Cursor'
import { ThemeProvider } from 'next-themes'
import React, { useState, useEffect, useRef } from 'react'
import LoadingDom from '../components/LoadingDom/LoadingDom'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    if(router.pathname === '/404' || router.pathname === '/500') {
      setLoading(false)
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000);

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
