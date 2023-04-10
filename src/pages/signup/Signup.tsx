import React, {useRef} from 'react'
import {useForm} from 'react-hook-form'
import {useAuth} from "../../contexts/AuthProvider";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm()
  const {signup} = useAuth()
  const password = useRef({})
  password.current = watch('password', '')
  const onSubmit = (data: any) => {
    console.log(data)
    signup && signup(data.email, data.password)
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <label aria-hidden="true">Sign up</label>
        <input type="email" placeholder="Email"
               required {...register('email', {
          required: 'email is required',
          pattern: /^.*@.*\..*$/i
        })}></input>
        <input type="password" placeholder="Password" required {...register("password", {
          required: 'Password required'
        })}></input>
        <input type="password" placeholder="Password" required {...register("passwordVerify", {
          required: 'Password verify required', validate: (value) =>
            value === password.current || 'The passwords do not match'
        })}></input>
        <button>Sign up</button>
      </form>
    </div>
  )
}
