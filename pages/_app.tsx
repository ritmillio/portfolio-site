import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cursor from '../components/Cursor/Cursor'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 6000);
  }, []);

  return (
    <>
      {/* <ThemeProvider attribute="class">
        <Cursor />
        <Component {...pageProps} />
      </ThemeProvider> */}

      {loading ? (
        <ThemeProvider attribute="class">
          <Cursor />
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <div className='h-screen bg-green-500 text-white flex items-center justify-center'>Loading</div>
      )}
    </>
  )
}

export default MyApp
