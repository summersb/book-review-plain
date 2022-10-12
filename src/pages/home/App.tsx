import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Main from './Main'
import NavBar from './NavBar'

interface AppProps {}

function App({}: AppProps) {
  return (
    <BrowserRouter>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
