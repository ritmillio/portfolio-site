import React from 'react'

type Props = {
    key: string,
    link: string,
    title: string,
    description : string,
    imageURL: string,
}

const Project: React.FC<Props> = ({key, link, title, imageURL}) => {
    return (
        <a className='' href={link} key={key}>
            <img  
                className='absolute rounded-md'
                src={imageURL}
                loading='lazy'
                alt='Zoltan Fodor - Creative Developer'
            />
            <div>{title}</div>
        </a>
    )
}
  
export default Project