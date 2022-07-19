import React from 'react'
import Image from 'next/image'
import ContactMe from './ContactMe'
import SocialLinks from './SocialLinks'
// const imageBaseLoader = ({ src: any, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

const Footer: React.FC = () => {
    return (
        <footer>
          <ContactMe />
          <SocialLinks />
        </footer>
      )
  }
  
  export default Footer
  

  // </footer>