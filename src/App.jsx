import './App.css'
import React from 'react'

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <img className='logo' src="https://static.vecteezy.com/system/resources/previews/027/127/543/non_2x/brawl-stars-logo-brawl-stars-icon-transparent-free-png.png" alt="" />
            <div className="menu">
              <a href="">Home</a>
              <a href="">About us</a>
              <a href="">Catalog</a>
              <a href="">Contacts</a>
            </div>
            <img className='burger' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
          </nav>
        </div>
      </header>
    </>
  )
}

export default App


