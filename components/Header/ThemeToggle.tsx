import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const ProgressBar: React.FC = () => {

    const {theme, setTheme} = useTheme();
    
    return(
        <div className='absolute top-0 right-0 mr-8 mt-8'>
            {theme === "light" ? (
                <Image
                    onClick={() => setTheme("dark")}
                    src="https://zoltanfodor.b-cdn.net/sun-bright-rays-sunny-weather-33960.png"
                    alt="Light mode - Sun"
                    width={40}
                    height={40}
                />
            ) : (
                <Image
                    onClick={() => setTheme("light")}
                    src="https://zoltanfodor.b-cdn.net/moon-2135874-1798952.png"
                    alt="Dark mode - Moon"
                    width={40}
                    height={40}
                />
            )}
        </div>
    )
}

export default ProgressBar;
