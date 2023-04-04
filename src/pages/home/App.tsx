import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {AuthProvider} from '../../contexts/AuthProvider'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import Main from './Main'
import NavBar from './NavBar'
import CreateReview from "../createReview/CreateReview";
import Logout from "./Logout";
import ReviewList from "../review/ReviewList";
import CreateAuthor from "../createAuthor/CreateAuthor";
import AuthorList from "../author/AuthorList";

const queryClient = new QueryClient()

interface AppProps {
}

function App({}: AppProps) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <header>
            <nav>
              <NavBar/>
            </nav>
          </header>
          <main className="main">
            <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path="review" element={<ReviewList/>}></Route>
              <Route path="author" element={<AuthorList/>}></Route>
              <Route path="createReview" element={<CreateReview/>}></Route>
              <Route path="createAuthor" element={<CreateAuthor/>}></Route>
              <Route path="signup" element={<Signup/>}></Route>
              <Route path="login" element={<Login/>}></Route>
              <Route path="logout" element={<Logout/>}></Route>
            </Routes>
          </main>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
