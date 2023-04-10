import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from "../../contexts/AuthProvider";

export default function NavBar() {
  const user = useContext(UserContext)
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user.currentUser != null && (<>
            <li>
              <Link to="/review">Reviews</Link>
            </li>
            <li>
              <Link to="/author">Authors</Link>
            </li>
            <li>
              <Link to="/createReview">Create a review</Link>
            </li>
            <li>
              <Link to="/createAuthor">Create an Author</Link>
            </li>
            <li>
              <Link to="logout">Logout</Link>
            </li>
          </>
        )}
        {user.currentUser == null && (
          <>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
