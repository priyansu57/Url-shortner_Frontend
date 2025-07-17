import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UrlShortener from './routes/url'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import LoginForm from './routes/Auth/LoginForm'
import Authdes from './routes/Auth/Authdes'

function App() {
 

  return (
    <>

     <Header />
     <Outlet />
     <Footer />
     
    </>
  )
}

export default App
