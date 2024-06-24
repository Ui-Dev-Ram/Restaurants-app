import React from 'react'

const Login = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-5">
        <div className="card-body">
        <h1 className='text-3xl text-center'>Login!</h1>

        <input type="text" placeholder="User" className="input input-bordered w-full max-w-xs mt-5" />
        <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs my-2" />
        
        <div className="card-actions justify-end">
            <button className="btn btn-accent">Login</button>
        </div>
        </div>
    </div>
  )
}

export default Login;