import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  )
}
