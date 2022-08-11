import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// Components ->
import Navbar from '../components/Header/Navbar'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'




const Home: NextPage = () => {
  // const {theme, setTheme} = useTheme()
  const {theme, setTheme} = useTheme();


  return (
    <div>
      {/* <button className='px-8 py-2.5  text-white' onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}>
        <div className='text-green-500'>sadfasf</div>
      </button> */}

      {theme === "light" ? (
        <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className="bg-red-500 h-10 w-10 text-indigo-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setTheme("light")}
          xmlns="http://www.w3.org/2000/svg"
          className="bg-green-500 h-10 w-10 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
      {/* <button onClick={() => setTheme('light')}>
        Light Mode
      </button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button> */}

      <Navbar />
      {/* <Articles /> */}
      <Intro />
      <Footer />
    </div>
  )
}

export default Home
