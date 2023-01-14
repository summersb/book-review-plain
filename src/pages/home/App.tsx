import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {AuthProvider} from '../../contexts/AuthContext'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Main from './Main'
import NavBar from './NavBar'
import NewBookReview from "../book/NewBookReview";

interface AppProps {
}

function App({}: AppProps) {

  console.log("env")

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
            <Route path="newreview" element={<NewBookReview/>}></Route>
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
