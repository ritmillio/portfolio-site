import React from 'react'
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
          <div className="dark:bg-drk-bgPrimary bg-lght-background p-4">
            <p id="copyright" className="text-center text-xs dark:text-drk-p text-lght-p">© 2022 Zoltan Fodor</p>
          </div>
        </footer>
      )
  }
  
  export default Footer
  

  // </footer>