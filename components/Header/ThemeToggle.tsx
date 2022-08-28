import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const ProgressBar: React.FC = () => {

    const {theme, setTheme} = useTheme();
    
    return(
        <div className='absolute top-0 right-0 mr-2 mt-2 sm:mr-4 sm:mt-4 md:mr-8 md:mt-8'>
            {theme === "light" ? (
                <Image
                    onClick={() => setTheme("dark")}
                    src="https://zoltanfodor.b-cdn.net/sun-bright-rays-sunny-weather-33960.png"
                    alt="Light mode - Sun"
                    width={40}
                    height={40}
                    priority
                />
            ) : (
                <Image
                    onClick={() => setTheme("light")}
                    src="https://zoltanfodor.b-cdn.net/moon-2135874-1798952.png"
                    alt="Dark mode - Moon"
                    width={40}
                    height={40}
                    priority
                />
            )}
        </div>
    )
}

export default ProgressBar;
