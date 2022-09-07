import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../fetcher';

const ProgressBar: React.FC = () => {
    const { data, error } = useSWR(`https://api.openweathermap.org/data/2.5/weather?lat=47.497913&lon=19.040236&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`, fetcher);

    if (error) return <div></div>
    if (!data) return <div></div>

    console.log(data)

    return(
        <div className='absolute top-0 left-0 ml-2 sm:ml-4 mt-4 md:ml-8 md:mt-10'>
            <div className='flex items-center justify-center'>
                <span className='hidden sm:block px-2 uppercase'>MY</span>
                <svg className='h-[30px] w-[25px] -mt-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="256" height="256">
                    <path fill='#e3e2e1' d='M54.01 58.74C54.01 61.65 44.15 64 32 64c-12.15 0-22.01-2.35-22.01-5.26 0-2.6 7.9-4.74 18.26-5.18h7.5c10.37.44 18.26 2.58 18.26 5.18z'></path>
                    <path fill='#e82327' d='M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z'></path>
                </svg>
                <span className='px-2 text-sm uppercase'>LAT: {data.coord.lon}</span>
                <span className='pl-2 sm:px-2 text-sm uppercase'>LONG: {data.coord.lat}</span>
                <span className='sm:px-2 text-sm uppercase flex items-center justify-center'>
                    <span className='hidden sm:block'>{data.weather[0].main}</span>
                    <span className='px-2 pt-2'>~</span>
                    <span>{Math.round((data.main.temp - 273.15) * 100) / 100}&deg;C</span>
                </span>
            </div>
        </div>
    )
}

export default ProgressBar;
