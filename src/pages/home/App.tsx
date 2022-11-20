import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {AuthProvider} from '../../contexts/AuthContext'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Main from './Main'
import NavBar from './NavBar'

interface AppProps {
}

function App({}: AppProps) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <header>
          <nav>
            <NavBar/>
          </nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
            <Route path="login" element={<Login/>}></Route>
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
