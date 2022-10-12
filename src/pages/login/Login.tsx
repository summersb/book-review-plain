import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { auth, login } from '../../api/Firebase'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (d) => {
    login(d.email, d.password)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input {...register('email')} />
        </label>
        <label>
          Password
          <input type="password" {...register('password')} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/signup">Signup</Link>
    </>
  )
}
