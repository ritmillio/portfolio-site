import type { NextPage } from 'next'
import { NextSeo } from 'next-seo';
// Components ->
import Navbar from '../components/Header/Navbar'
import Intro from '../components/Intro/Intro'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Articles from '../components/Articles/Articles';
import Footer from '../components/Footer/Footer'

const Home: NextPage = () => {

  return (
    <>
      <NextSeo
        title="Zoltan Fodor - Portfolio Website"
        description="Hi , my name is Zoltan. I am a Creative Developer. I design and build websites and web applications. Let’s get in touch and work together on your next project."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://zoltanfodor.b-cdn.net/zoltan-fodor-resi-prof.jpeg',
          title: 'Zoltan Fodor - Creative Developer',
          description: 'Hi , my name is Zoltan. I am a Creative Developer. I design and build websites and web applications. Let’s get in touch and work together on your next project',
          images: [
            {
              url: 'https://zoltanfodor.b-cdn.net/zoltan-fodor-resi-prof.jpeg',
              width: 512,
              height: 768,
              alt: 'Zoltan Fodor - Creative Developer',
              type: 'image/jpeg',
            },
            {
              url: 'https://zoltanfodor.b-cdn.net/zoltan-fodor-resi-prof.jpeg',
              width: 612,
              height: 968,
              alt: 'Zoltan Fodor - Creative Developer',
              type: 'image/jpeg',
            },
            { url: 'https://zoltanfodor.b-cdn.net/zoltan-fodor-resi-prof.jpeg' },
            { url: 'https://zoltanfodor.b-cdn.net/zoltan-fodor-resi-prof.jpeg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://zoltanfodor.b-cdn.net/fav-zoli.png',
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://zoltanfodor.b-cdn.net/fav-zoli.png',
            sizes: '76x76'
          },
        ]}
        />
        <nav>
          <Navbar />
        </nav>
        <Intro />
        <main className='main'>
          <About />
          <Projects />
          <Articles />
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  )
}

export default Home
