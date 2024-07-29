import { useState } from 'react'
import '../App.css'
import logo from '../assets/quizwhiz-logo.svg'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <>
      <div className="cont w-full h-screen bg-slate-700 py-14 px-4 flex items-center">
        <div className="mx-auto w-full max-w-[343px] max-h-[540px] bg-primary opacity-70 rounded-2xl flex flex-col justify-center p-8 text-center gap-6 md:w-full  md:max-w-[400px] lg:max-w-[450px]">
            <form onSubmit="" >
                <img className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]" src={logo} alt="quiz app logo" />
                <p className="text-xl py-8 uppercase tracking-[.25em] text-light">Login Page</p>
            
                <div className="flex flex-col text-left text-light font-medium gap-2">
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border text-primary rounded focus:outline-none focus:ring focus:border-secondary-300 mb-2"
                    required
                />

                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border text-primary rounded focus:outline-none focus:ring border-secondary-300 mb-8"
                    required
                />
                </div>

                <button
                type="submit"
                className="w-full btn-bg text-white py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                Login
                </button>
            </form>
        </div>
        
      </div>
    </> 
  )
}

export default Login
