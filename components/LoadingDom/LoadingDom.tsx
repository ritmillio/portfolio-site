import React from 'react'

const LoadingDom: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url('https://zoltanfodor.b-cdn.net/zoltan_fodor_portfolio_website/domloader-sw.webp')] bg-center bg-no-repeat bg-cover">
            <div className='text-center flex flex-col items-center justify-center'>
                <h1 className='text-white text-5xl'>Loading</h1>
                <h5 className='uppercase text-white'></h5>
            </div>
        </div>
      )
}
  
export default LoadingDom
