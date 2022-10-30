import Document, { Html, Head, Main, NextScript } from 'next/document'
// import Spotify from '../components/Spotify/Spotify'

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&family=Oswald:wght@500;700&display=swap" rel="stylesheet" />
        </Head>
        {/* <body className='relative'> */}
        <body>
        {/* <div className='fixed bottom-0 left-0 mb-20 ml-6 z-50'>
          <Spotify />
        </div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
  
