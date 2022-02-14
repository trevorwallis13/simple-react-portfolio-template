import React from 'react'
import MainNav from './MainNav'

const Header = () => {
  return (
    <header className="main-header">
        <div className="header-content container">
            <span className="logo">TW</span>
            <MainNav/>
        </div>
    </header>
  )
}

export default Header