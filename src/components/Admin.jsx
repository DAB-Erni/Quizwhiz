import { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { getAllQuizzes, createQuiz } from "../services/quizService";

function Admin() {
  const [quizzes, setQuizzes] = useState([]);
  const [quizTitle, setQuizTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await getAllQuizzes();
      setQuizzes(response.data);
    };

    fetchQuizzes();
  }, []);


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuiz = {title: quizTitle, userId: 1};
    await createQuiz(newQuiz);
    setIsModalOpen(false);
    setQuizTitle('');
    console.log('Quiz Created');

    const response = await getAllQuizzes();
    setQuizzes(response.data);

  };

  return (
    <>
      <Navbar />

      <div className="cont w-full h-full md:h-screen bg-slate-700 pt-[140px] py-14 px-4 flex items-center relative">
        <div className="mx-auto w-full max-w-[343px] h-auto bg-primary opacity-70 rounded-2xl flex flex-col justify-start px-4 py-8 text-center gap-5 md:w-full md:max-w-[768px] lg:max-w-[1080px]">
          <h2 className="text-xl uppercase tracking-[.25em] text-white ">
            QUIZ COLLECTIONS
          </h2>
          <hr className="border-b-0 border-secondary" />

          <div className="flex flex-col gap-4">
            {/* Container for List of Questions */}
            <div className="flex-col flex-wrap">
              {/* Questions Container */}
              <div className="flex flex-wrap gap-2 h-full max-h-full overflow-y-auto justify-center">
                
                {/* Quiz Cards */}
                {quizzes.map((quiz) => (
                  <div key={quiz.createdQuizId} className="flex gap-2 w-full md:w-1/3 lg:w-1/4">
                    <div className="bg-secondary gap-6 flex flex-col justify-center items-center rounded-lg py-5 px-3 w-full">
                      <p className="text-sm py-2 lg:text-lg text-light max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] xl:max-w-[350px]">
                        {quiz.title}
                      </p>
                      <div className="flex gap-1">
                        <Link to={`/examiner/${quiz.createdQuizId}`}>
                          <button className="font-normal text-xs w-full text-tertiary border-tertiary border-2 flex justify-center gap-2 items-center text-md px-8 py-3 rounded hover:bg-tertiary hover:text-light focus:outline-none focus:ring focus:ring-blue-300">
                            View Test
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))};

              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="w-full max-w-[250px] btn-bg text-white py-3 rounded focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleOpenModal}
            >
              + Create a New Quiz
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-semibold mb-4 text-center text-secondary">Create a New Quiz</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary text-sm font-bold mb-2" htmlFor="quizTitle">
              Quiz Name
            </label>
            <input
              id="quizTitle"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              value={quizTitle}
              onChange = {(e) => setQuizTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-accent opacity-70 hover:bg-acent hover:opacity-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Close
            </button>
              <button
                type="submit"
                className="bg-tertiary opacity-70 hover:bg-tertiary hover:opacity-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>            

          </div>
        </form>
      </Modal>
    </>
  );
}

export default Admin;