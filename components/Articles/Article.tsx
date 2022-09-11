import React from 'react'

type Props = {
    link: string,
    title: string,
    description : string,
    imageURL: string,
}

const Article: React.FC<Props> = ({ link, title, description, imageURL}) => {
    return (
        <article key={ link } className='hover:scale-110 transform-gpu transition-all'>
            <a href={link} target="_blank" rel="noreferrer">
                <div className='relative h-[150px] w-[290px] md:h-[200px] md:w-[350px]'>
                    <img src={imageURL} alt={title} className='opacity-50 w-full h-full object-fill absolute rounded-md' loading='lazy'/>
                    <div className='absolute bottom-0 mb-4 ml-4'>
                        <h5 className='text-white'>{ title }</h5>
                        <p dangerouslySetInnerHTML={{__html: description}} className='text-white'></p>
                    </div>
                </div>
            </a>
        </article>
    )
}
  
export default Article