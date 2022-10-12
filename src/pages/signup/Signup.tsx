import React from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const onSubmit = (data) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <label>
          Email
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: /^.*@.*\..*$/i,
            })}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
        </label>
        <div className="invalid-feedback">
          <>
            {errors.email?.type === 'required' && errors.email.message}
            {errors.email?.type === 'pattern' &&
              'E-Mail must be in the correct format'}
          </>
        </div>
        <label>
          Password
          <input
            type="password"
            name="password"
            ref={
              register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              }).ref
            }
          />
        </label>
        <label>
          Password Verify
          <input
            type="password"
            name="paswordVerify"
            ref={
              register('passwordVerify', {
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              }).ref
            }
          />
        </label>
        <input type="submit" value="Signup" />
      </form>
    </>
  )
}
