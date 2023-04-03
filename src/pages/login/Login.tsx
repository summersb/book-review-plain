import React from 'react'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from "../../contexts/AuthProvider";

type UserType = {
  email: string
  password: string
}

export default function Login() {
  const {register, handleSubmit} = useForm<UserType>()
  const {login} = useAuth();
  const navigate = useNavigate();

  const onSubmit = (d: UserType) => {
    if (login) {
      login(d.email, d.password)
      .then(d => {
        console.log(d)
        navigate("/")
      })
      .catch(err => console.log(err))
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
      <div className="text">Don't have an account create one&nbsp;</div>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  )
}
