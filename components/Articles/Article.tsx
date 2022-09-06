import React from 'react'

type Props = {
    link: string,
    title: string,
    description : string,
    imageURL: string,
}

const Article: React.FC<Props> = ({ link, title, description, imageURL}) => {
    return (
        <article key={ link }>
            <a href={link} target="_blank" rel="noreferrer">
                <div className='relative h-[150px] w-[290px] md:h-[200px] md:w-[350px] hover:scale-110 transform-gpu transition-all'>
                    <img src={imageURL} alt={title} className='hover:opacity-100 opacity-50 w-full h-full object-fill absolute rounded-md' loading='lazy'/>
                    <div className='absolute bottom-0 mb-4 ml-4'>
                        <h5 className='text-white'>{ title }</h5>
                        <p className='text-white'>{ description }</p>
                    </div>
                </div>
            </a>
        </article>
    )
}
  
export default Article