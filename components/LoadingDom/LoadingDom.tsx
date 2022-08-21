import React from 'react'
import CountUp from 'react-countup';

const LoadingDom: React.FC = () => {
    
    return (
        <div id='loadingDom' className="h-screen bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/bg-noise-portfolio-website.png')] bg-center bg-repeat bg-[length:300px_300px] dark:bg-[#16161a] bg-white dark:text-white text-black flex justify-center items-center cursor-none">
            <CountUp
                className='text-8xl'
                start={0}
                end={100}
                duration={2}
                separator=" "
                decimals={0}
                suffix=" %"
            />
        </div>
      )
}
  
export default LoadingDom
