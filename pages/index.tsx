import type { NextPage } from 'next'
import { NextSeo } from 'next-seo';

// Components ->
import Navbar from '../components/Header/Navbar'
import Intro from '../components/Intro/Intro'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Articles from '../components/Articles/Articles';
import Footer from '../components/Footer/Footer'

// export async function getStaticProps() {
//   const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zoltanfodor')
//   const articles = await res.json()

//   console.log(articles)
//   return {
//     props: {
//       articles,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     // revalidate: 15, // In seconds
//   }
// }

const Home: NextPage = ( {} ) => {

  return (
    <>
      <NextSeo
        title="Zoltan Fodor - Portfolio Website"
        description="My Personal Portfolio Website created with Next.js, Tailwindcss, "
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Zoltan Fodor - Creative Developer',
          description: 'Hi , my name is Zoltan. I am a Creative Developer. I design and build websites and web applications. Let’s get in touch and work together on your next project',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Articles />
      <Footer />
    </>
  )
}

export default Home
