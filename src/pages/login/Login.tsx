import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {getRedirectResult, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import {useAuth} from "../../contexts/AuthProvider"
import type {User} from "../../type"
import {auth} from "../../api/Firebase"

const googleProvider = new GoogleAuthProvider();

export default function Login() {
  const {register, handleSubmit} = useForm<User>()
  const {login} = useAuth();
  const navigate = useNavigate();

  const signInGoogle = (e: any): void => {
    e.preventDefault()
    signInWithRedirect(auth, googleProvider)
  }

  useEffect(() => {
      getRedirectResult(auth)
      .then((result) => {
        if (result !== null && result.user) {
          navigate("/")
        }
        // const cred = GoogleAuthProvider.credentialFromResult(result);
        // const token = cred.accessToken;
      }).catch(e => alert(e.message))
    }, []
  )

  const onSubmit = (d: User) => {
    if (login) {
      login(d.email, d.password)
      .then(() => {
        navigate("/")
      })
      .catch(err => console.log(err.message))
    } else {
      console.log("Missing login function");
    }
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <label aria-hidden="true">Login</label>
        <input type="text" placeholder="email"
               required {...register('email', {required: 'Email is required'})}></input>
        <input type="password" placeholder="email"
               required {...register('password', {required: 'Password required'})}></input>
        <button>Login</button>
      </form>
      <br/>
      <div><a href="#" onClick={signInGoogle}>Sign in with Google</a></div>
    </div>
  )
}
