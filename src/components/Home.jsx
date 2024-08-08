import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <div className="cont w-full h-screen bg-slate-700 py-14 px-4 flex items-center relative">
        <div className="mx-auto w-full max-w-[343px] max-h-[540px] bg-primary opacity-70 rounded-2xl flex flex-col justify-center p-8 text-center gap-6 md:w-full md:max-w-[400px] lg:max-w-[450px]">
          <p className="text-light text-xl sm:text-2xl lg:text-3xl py-4 tracking-[.25em]">QuizWhiz App</p>
          <div className="w-full text-left text-light">
            <p>Please Select your Role</p>

            <div className="pt-8">
              <p className="text-xs py-2 md:text-sm lg:text-lg">(Create and manages quizzes)</p>
              <Link to="/login">
                  <button className="w-full bg-tertiary flex justify-center gap-2 items-center text-md text-white py-3 rounded opacity-90 hover:bg-tertiary hover:opacity-100 focus:outline-none focus:ring focus:ring-blue-300">EXAMINER</button>         
              </Link>

            </div>

            <div className="pt-8">
              <p className="text-xs py-2 md:text-sm lg:text-lg">(Take quizzes and test your knowledge)</p>

              <Link to="/login">
                <button className="w-full bg-accent flex justify-center gap-2 items-center text-md text-white py-3 rounded opacity-90 hover:bg-accent hover:opacity-100 focus:outline-none focus:ring focus:ring-blue-300">EXAMINEE</button>
              </Link>

            </div>
          </div>
        </div>      
      </div>
    </> 
  )
}

export default Home
