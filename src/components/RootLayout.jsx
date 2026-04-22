import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './RootLayout.css'
import Navbar from './Navbar.jsx'

const RootLayout = () => {

  const location = useLocation();
  const path = location.pathname;
  const page = path.split('/')[1] || 'home'

 return (
    <div className={`page-${page} min-h-screen text-white flex flex-col font-sans relative overflow-hidden`}>
      <Navbar/>
      
      <main className="flex-grow flex flex-col relative z-10">
        <Outlet /> 
      </main>
      
    </div>
  )
}

export default RootLayout
