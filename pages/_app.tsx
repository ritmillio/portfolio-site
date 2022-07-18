import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cursor from '../components/Cursor/Cursor'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
