import { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { getAllQuizzes } from '../services/quizService';


const  Users = () => {

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await getAllQuizzes();
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <>
    <Navbar />
      <div className="cont w-full h-screen md:h-screen bg-slate-700 pt-[12px] py-14 px-4 flex items-center relative">
        <div className="mx-auto w-full max-w-[343px] h-auto bg-primary opacity-80 rounded-2xl flex flex-col justify-start px-4 py-8 text-center gap-5 md:w-full md:max-w-[768px] lg:max-w-[1080px]">
          <h2 className="text-xl uppercase tracking-[.25em] text-white ">
            Test your Knowledge
          </h2>
          <hr className="border-b-0 border-secondary" />

          <div className="flex flex-col gap-4">

            {/* Container for List of Questions */}
            <div className="flex-col flex-wrap">
              {/* Questions Container */}
              <div className="flex flex-wrap gap-2 h-full max-h-full overflow-y-auto justify-center">

              {quizzes.map((quiz) => (
                  <div key={quiz.createdQuizId} className="flex gap-2 w-full md:w-1/3 lg:w-1/4">
                    {/* One Collection card */}
                    <div className="bg-secondary gap-6 flex flex-col justify-center items-center rounded-lg py-5 px-3 w-full">
                      <p className="text-sm py-2 lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[350px]">
                        {quiz.title}
                      </p>
                      <div className="flex gap-1">
                        <Link to={`/examinee/${quiz.createdQuizId}`}>
                          <button className="font-normal text-xs w-full text-tertiary border-tertiary border-2 flex justify-center gap-2 items-center text-md px-8 py-3 rounded hover:bg-tertiary hover:text-light focus:outline-none focus:ring focus:ring-blue-300">
                            Take Test
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Users;
