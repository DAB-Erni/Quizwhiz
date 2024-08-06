import { useState } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import Modal from './Modal';


function Examinee() {
  const [answer, setAnswer] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    setIsModalOpen(false);
  };

  return (
    <>
    <Navbar />
      <div className="pt-[120px] cont w-full h-screen bg-slate-700 px-4 flex items-center relative">
        <div className="mx-auto w-full max-w-[343px] max-h-full bg-primary opacity-70 rounded-2xl flex flex-col justify-center px-4 py-8 text-center gap-6 md:w-full md:max-w-[400px] lg:max-w-[450px]">
          <h2 className="text-xl uppercase tracking-[.25em] text-white ">
            Examinee Page
          </h2>
          <hr className="border-b-2 border-secondary" />

            {/* Questions Container */}
          <div className="mx-auto w-full max-w-[343px] max-h-[720px] bg-primary opacity-70 rounded-2xl flex flex-col justify-start px-4 py-2 text-center gap-6 overflow-x-auto md:w-full md:max-w-[400px] lg:max-w-[450px]">
            {/* One Question */}
            <div className="text-center">
              <p className="text-light font-medium text-xl lg:text-2xl py-4 md:py-6">
                What is the capital of France? 
              </p>

              <div className="text-left">
                <label className="text-light font-light" htmlFor="answer">
                  Answer
                </label>
                <input
                  type="text"
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full px-3 mt-2 py-2 border text-primary rounded focus:outline-none focus:ring border-secondary-300 mb-8"
                  required
                />
              </div>
              <hr className="border-b-0 border-secondary" />
            </div>
            {/* One Question */}
            {/* One Question */}
            <div className="text-center">
              <p className="text-light font-medium text-xl lg:text-2xl py-4 md:py-6">
              What is the capital city of Japan?
              </p>

              <div className="text-left">
                <label className="text-light font-light" htmlFor="answer">
                  Answer
                </label>
                <input
                  type="text"
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full px-3 mt-2 py-2 border text-primary rounded focus:outline-none focus:ring border-secondary-300 mb-8"
                  required
                />
              </div>
              <hr className="border-b-0 border-secondary" />
            </div>
            {/* One Question */}
            {/* One Question */}
            <div className="text-center">
              <p className="text-light font-medium text-xl lg:text-2xl py-4 md:py-6">
                Identify the largest planet in our solar system.
              </p>

              <div className="text-left">
                <label className="text-light font-light" htmlFor="answer">
                  Answer
                </label>
                <input
                  type="text"
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full px-3 mt-2 py-2 border text-primary rounded focus:outline-none focus:ring border-secondary-300 mb-8"
                  required
                />
              </div>
              <hr className="border-b-0 border-secondary" />
            </div>
            {/* One Question */}
            {/* One Question */}
            <div className="text-center">
              <p className="text-light font-medium text-xl lg:text-2xl py-4 md:py-6">
              Identify the chemical element with the symbol "O".
              </p>

              <div className="text-left">
                <label className="text-light font-light" htmlFor="answer">
                  Answer
                </label>
                <input
                  type="text"
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full px-3 mt-2 py-2 border text-primary rounded focus:outline-none focus:ring border-secondary-300 mb-8"
                  required
                />
              </div>
              <hr className="border-b-0 border-secondary" />
            </div>
            {/* One Question */}
          </div>

          <div className="flex flex-col gap-2">
            <button className="font-normal w-full btn-bg flex justify-center gap-2 items-center text-md text-white py-3 rounded hover:bg-tertiary focus:outline-none focus:ring focus:ring-blue-300" onClick={handleOpenModal}>Submit Answers</button>

            <Link to="/user">
              <button className="font-normal w-full text-tertiary border-tertiary border-2 flex justify-center gap-2 items-center text-md py-3 rounded hover:bg-tertiary hover:text-light focus:outline-none focus:ring focus:ring-blue-300">Back to Quiz Collections</button>
            </Link>

          </div>
        </div>

      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-normal  text-center text-black">Your Score</h2>
        <p className="text-8xl font-medium py-10 text-center text-secondary">20</p>
        <form onSubmit={handleSubmit}>
          
          <div className="flex justify-end">
          <Link to="/user">
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-accent opacity-70 hover:bg-acent hover:opacity-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Back to Quizzes
            </button>
            </Link>
              <button
                type="submit"
                className="bg-tertiary opacity-70 hover:bg-tertiary hover:opacity-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Retake Quiz
              </button>            

          </div>
        </form>
      </Modal>
    </>
  );
}

export default Examinee;
