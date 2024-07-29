import { useState } from 'react'
import '../App.css'
import logo from '../assets/quizwhiz-logo.svg'
import logoutIcon from '../assets/logout.svg'

function Navbar() {

  return (
    <>
    <div className="w-full h-fit bg-primary absolute z-30">
        <div className="mx-auto max-w-[1024px] px-2 py-6 sm:px-4 md:px-5 lg:px-8  flex justify-between items-center ">
        <img className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px]" src={logo} alt="quiz app logo" />
            <div>
            <button className="w-32 btn-bg flex justify-center gap-2 items-center text-md text-white py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            <img src={logoutIcon} alt="quiz app logo" />
                <span>Logout</span>
            </button>
            </div>
        </div>
    </div>

    </> 
  )
}

export default Navbar
