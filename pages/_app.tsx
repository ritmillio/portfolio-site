import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Cursor from '../components/Cursor/Cursor';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NDZH17VXRN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NDZH17VXRN');
        `}
      </Script>
      <ThemeProvider attribute="class">
          <Cursor />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
