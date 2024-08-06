import { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';


const  Users = () => {

  return (
    <>
    <Navbar />
      <div className="cont w-full h-full md:h-screen bg-slate-700 pt-[140px] py-14 px-4 flex items-center relative">
        <div className="mx-auto w-full max-w-[343px] h-auto bg-primary opacity-70 rounded-2xl flex flex-col justify-start px-4 py-8 text-center gap-5 md:w-full md:max-w-[768px] lg:max-w-[1080px]">
          <h2 className="text-xl uppercase tracking-[.25em] text-white ">
            Test your Knowledge
          </h2>
          <hr className="border-b-0 border-secondary" />

          <div className="flex flex-col gap-4">

            {/* Container for List of Questions */}
            <div className="flex-col flex-wrap">
              {/* Questions Container */}
              <div className="flex flex-wrap gap-2 h-full max-h-full overflow-y-auto justify-center">

                <div className="flex gap-2 w-full md:w-1/3 lg:w-1/4">
                  {/* One Collection card */}
                  <div className="bg-secondary gap-6 flex flex-col justify-center items-center rounded-lg py-5 px-3 w-full">
                    <p className="text-sm py-2 lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[350px]">
                    Trivia Challenge
                    </p> 
                    <div className="flex gap-1">
                        <Link to="/examinee">
                        <button className="font-normal text-xs w-full text-tertiary border-tertiary border-2 flex justify-center gap-2 items-center text-md px-8 py-3 rounded hover:bg-tertiary hover:text-light focus:outline-none focus:ring focus:ring-blue-300">Take Test</button>    
                        </Link>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 w-full md:w-1/3 lg:w-1/4">
                  {/* One Collection card */}
                  <div className="bg-secondary gap-6 flex flex-col justify-center items-center rounded-lg py-5 px-3 w-full">
                    <p className="text-sm py-2 lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[350px]">
                    Trivia Challenge
                    </p>
                    <div className="flex gap-1">
                        <Link to="/examinee">
                        <button className="font-normal text-xs w-full text-tertiary border-tertiary border-2 flex justify-center gap-2 items-center text-md px-8 py-3 rounded hover:bg-tertiary hover:text-light focus:outline-none focus:ring focus:ring-blue-300">Take Test</button>    
                        </Link>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 w-full md:w-1/3 lg:w-1/4">
                  {/* One Collection card */}
                  <div className="bg-secondary gap-6 flex flex-col justify-center items-center rounded-lg py-5 px-3 w-full">
                    <p className="text-sm py-2 lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[350px]">
                    Trivia Challenge
                    </p>
                    <div className="flex gap-1">
                        <Link to="/examinee">
                        <button className="font-normal text-xs w-full text-tertiary border-tertiary border-2 flex justify-center gap-2 items-center text-md px-8 py-3 rounded hover:bg-tertiary hover:text-light focus:outline-none focus:ring focus:ring-blue-300">Take Test</button>    
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Users;
