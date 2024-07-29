import { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";

function Examiner() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <>
      <div className="cont w-full h-screen bg-slate-700 py-14 px-4 flex items-center relative">
        <div className="mx-auto w-full max-w-[343px] max-h-full bg-primary opacity-70 rounded-2xl flex flex-col justify-center px-4 py-8 text-center gap-6 md:w-full md:max-w-[400px] lg:max-w-[450px]">
          <h2 className="text-xl uppercase tracking-[.25em] text-white ">
            Examiner Page
          </h2>
          <hr className="border-b-0 border-secondary" />

          {/* Create a question component */}
          <div className="bg-secondary w-full rounded-2xl px-4 py-8">
            <form>
              <div className="flex flex-col text-left text-white font-medium gap-2">
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
                className="w-full btn-bg text-white py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Add Question
              </button>
            </form>
          </div>

          {/* List of Question */}
          <h3 className="pt-8 pb-5 text-light text-xl font-medium">
            List of Quiz Questions
          </h3>

          {/* Example question input */}
          <div className="flex gap-2 flex-wrap">
            {/* One question card */}
            <div className="bg-secondary w-full flex justify-between items-center rounded-lg p-2">
              <p className="text-sm lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                Bakit ka na naman naninilip diyan?
              </p>
              <div className="flex gap-1">
                <button className="w-16 text-sm font-light bg-tertiary text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                  Edit
                </button>
                <button className="w-16 text-sm font-light bg-accent text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                  Delete
                </button>
              </div>
            </div>

            {/* One question card */}
            <div className="bg-secondary w-full flex justify-between items-center rounded-lg p-2">
              <p className="text-sm lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                Bakit mo na naman ako dinadaldal?
              </p>
              <div className="flex gap-1">
                <button className="w-16 text-sm font-light bg-tertiary text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                  Edit
                </button>
                <button className="w-16 text-sm font-light bg-accent text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Examiner;
