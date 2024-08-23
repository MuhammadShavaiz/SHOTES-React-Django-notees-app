import React from 'react'
import {ReactComponent as SunIcon} from '../assets/sun.svg'
import {ReactComponent as MoonIcon} from '../assets/moon.svg'

const Header = ({theme,setTheme}) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? '' : 'dark'));
  };
  return (
    <div className='app-header'>
      <h1>Note List</h1>
      <button style={{ width: '30px', height: '30px'}} onClick={toggleTheme}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}

export default Header
