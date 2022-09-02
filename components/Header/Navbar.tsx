import React from 'react'
import ProgressBar from './ProgressBar';
import ThemeToggle from './ThemeToggle';
import LocationAndWeather from './LocationAndWeather';

const Navbar: React.FC = () => {
  return (
      <>
        <ProgressBar />
        <LocationAndWeather/>
        <ThemeToggle />
      </>
    )
}
  
export default Navbar
  