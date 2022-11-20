import React from 'react'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import {useAuth} from "../../contexts/AuthContext";


export default function Login() {
  const {register, handleSubmit} = useForm()
  const {login} = useAuth();

  const onSubmit = (d) => {
    login && login(d.email, d.password)
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
      <div className="text">Don't have an account create one&nbsp;</div>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  )
}
