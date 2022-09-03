import React from 'react'

type Props = {
    key: string,
    link: string,
    title: string,
    description : string,
    imageURL: string,
}

const ArticleCard: React.FC<Props> = ({key, link, title, description, imageURL}) => {
    return (
        <article className='relative min-h-32 dark:bg-happyhues_4-background-primary bg-happyhues_11-background-primary mx-4 my-2 min-h-[100px] min-w-[250px] ' key={key}>
            <img  
                className='absolute rounded-md'
                src={imageURL}
                loading='lazy'
                alt='Zoltan Fodor - Creative Developer'
            />
            <a className='' href={link}>
                <div>{title}</div>
                <div dangerouslySetInnerHTML={{
                    __html: description
                }}></div>
            </a>
        </article>
    )
}
  
export default ArticleCard