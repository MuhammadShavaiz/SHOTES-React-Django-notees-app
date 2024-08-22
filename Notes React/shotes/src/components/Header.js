import React from 'react'
import {ReactComponent as ThemeIcon} from '../assets/idea-svgrepo-com.svg'

const Header = ({theme,setTheme}) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? '' : 'dark'));
  };
  return (
    <div className='app-header'>
      <h1>Note List</h1>
      <ThemeIcon onClick={toggleTheme} style={{width:"30px",height:'30px'}}/>
    </div>
  )
}

export default Header
