import React, { useRef, useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../fetcher'

import Article from './Article'


const Articles: React.FC = () => {

  const { data, error } = useSWR('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zoltan_fodor_', fetcher)
  const refToComponent = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    async function animate() {
        const sr = (await require("scrollreveal")).default({
          origin: "top",
          distance: "60px",
          duration: 2500,
          delay: 400,
          reset: true,
      })
      if (refToComponent.current) {
        sr.reveal(refToComponent.current, {})
      }
    }
    animate()
  }, [])

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)

  return (
        <div className="min-h-screen flex flex-col items-center bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-happyhues_4-background-secondary  bg-happyhues_11-background-primary">
        <div className='container mx-auto py-20 px-4'>
          <h2 className='uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl dark:text-happyhues_4-text-headline text-happyhues_11-text-headline' ref= {refToComponent}>
            Articles
          </h2>
          <a href={data.feed.feed} rel="noreferrer" className='italic underline pt-2 pb-6 pl-[1px] dark:hover:text-happyhues_4-background-button hover:text-happyhues_11-background-button'>
            <h6>{ data.feed.description }</h6>
          </a>
          <div className='flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-10 xl:gap-12 pt-6 lg:pt-12'>
          {data.items.map(( article: any ) => {
              return (
                <Article key={article.link} link={article.link} title={article.title} description={article.description.split('<p>')[1].split('</p>')[0]} imageURL={article.thumbnail}/>
              );
            })}
          </div>
        </div>
      </div>
    )
}

export default Articles