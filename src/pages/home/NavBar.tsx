import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li className="navigation">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="newreview">Add Review</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </div>
  )
}
