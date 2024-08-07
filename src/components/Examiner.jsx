import { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link, useParams } from 'react-router-dom';
import {getQuizById } from '../services/quizService';

function Examiner() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const {id} = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuizById(id);
        setQuiz(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    }

    fetchQuiz();
  }, []);

  if(!quiz) {
    return <div>Loading...</div>
  }

  return (
    <>
    <Navbar />
      <div className="cont w-full h-full md:h-screen bg-slate-700 pt-[140px] py-14 px-4 flex items-center relative">
        <div className="mx-auto w-full max-w-[343px] h-auto bg-primary opacity-70 rounded-2xl flex flex-col justify-start px-4 py-8 text-center gap-5 md:w-full md:max-w-[768px] lg:max-w-[1080px]">
          <h2 className="text-xl uppercase tracking-[.25em] text-white ">
            Examiner Page
          </h2>
          <hr className="border-b-0 border-secondary" />

          <div className="flex flex-col gap-4 md:flex-row flex-1 ">
            {/* Create a question component */}
            <div className="bg-secondary w-full max-h-screen rounded-2xl px-4 py-8 md:max-w-[50%] md:max-h-[446px]">
              <form>
                <div className="flex flex-col text-left text-white font-medium gap-2">
                  {/* <h3 className="pb-2 text-light text-lg font-normal text-center">
                    Customize your Quiz Questions
                  </h3> */}
                  <h4 className="pb-2 text-white text-2xl font-medium text-center">
                    Quiz Name
                  </h4>
                  <label htmlFor="question">Question</label>
                  <input
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3 py-2 border text-primary rounded focus:outline-none focus:ring focus:border-secondary-300 mb-2"
                    required
                  />

                  <label htmlFor="answer">Answer</label>
                  <input
                    type="text"
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full px-3 py-2 border text-primary rounded focus:outline-none focus:ring border-secondary-300 mb-8"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-bg text-white py-3 rounded hover:bg-tertiary focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add Question
                </button>

                <Link to="/admin">
                    <button className="font-normal w-full text-tertiary border-tertiary border-2 flex justify-center gap-2 items-center text-md mt-2 py-3 rounded hover:bg-tertiary hover:text-light focus:outline-none focus:ring focus:ring-blue-300">Back to Collections</button>    
                </Link>

                <Link to="/admin">
                    <button className="font-medium w-full text-red-400  flex justify-center gap-2 items-center text-md mt-2 py-3 rounded hover:font-medium hover:text-accent focus:outline-none focus:ring focus:ring-blue-300">Delete Test</button>    
                </Link>


              </form>
            </div>

            {/* Container for List of Questions */}
            <div className="flex-1">
              {/* List of Question */}
              <h3 className="pt-8 pb-5 text-light text-xl font-medium">
                List of Quiz Questions
              </h3>

              {/* Questions Container */}
              <div className="flex flex-col gap-2 h-full max-h-[350px] md:max-h-[70%] lg:max-h-[80%] overflow-y-auto">

                {/* Example question input */}
                <div className="flex gap-2 flex-wrap">
                  {/* One question card */}
                  <div className="bg-secondary w-full flex justify-between items-center rounded-lg p-2">
                    <p className="text-sm lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[350px] overflow-hidden text-ellipsis whitespace-nowrap">
                      Bakit ka na naman naninilip diyan?
                    </p>
                    <div className="flex gap-1">
                      <button className="w-16 text-sm font-light bg-tertiary text-white py-2 rounded opacity-90 hover:opacity-100 focus:outline-none focus:ring focus:ring-blue-300">
                        Edit
                      </button>
                      <button className="w-16 text-sm font-light bg-accent text-white py-2 rounded opacity-90 hover:opacity-100 focus:outline-none focus:ring focus:ring-blue-300">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                {/* Example question input */}
                <div className="flex gap-2 flex-wrap">
                  {/* One question card */}
                  <div className="bg-secondary w-full flex justify-between items-center rounded-lg p-2">
                    <p className="text-sm lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[350px] overflow-hidden text-ellipsis whitespace-nowrap">
                      Bakit ka na naman naninilip diyan?
                    </p>
                    <div className="flex gap-1">
                      <button className="w-16 text-sm font-light bg-tertiary text-white py-2 rounded opacity-90 hover:opacity-100 focus:outline-none focus:ring focus:ring-blue-300">
                        Edit
                      </button>
                      <button className="w-16 text-sm font-light bg-accent text-white py-2 rounded opacity-90 hover:opacity-100 focus:outline-none focus:ring focus:ring-blue-300">
                        Delete
                      </button>
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

export default Examiner;
