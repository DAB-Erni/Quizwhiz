import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Navbar from "./Navbar";
import { getQuizById, submitAnswers } from '../services/quizService';
import Modal from './Modal';

function Examinee() {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        console.log('Fetching quiz with ID:', quizId);
        const response = await getQuizById(quizId);
        const quiz = response.data;
        console.log('Fetched quiz:', quiz);
        if (quiz && quiz.questions) {
          setQuestions(quiz.questions);
          console.log('Fetched questions:', quiz.questions);
        } else {
          console.error("No questions found for this quiz.");
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    if (quizId) {
      fetchQuiz();
    }
  }, [quizId]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await submitAnswers(quizId, answers);
        setScore(response.data.score);
        setIsModalOpen(true);
    } catch (error) {
        console.error("Error submitting answers:", error);
    }
};

  return (
    <>
      <Navbar />
      <div className="pt-[100px] cont w-full h-full bg-slate-700 pb-4 flex items-center relative">
        <div className="mx-auto w-full max-w-[343px] h-full max-h-full bg-primary opacity-80 rounded-2xl flex flex-col justify-start px-4 py-8 text-center gap-6 md:w-full md:max-w-[400px] lg:max-w-[760px]">
          <h2 className="text-xl uppercase tracking-[.25em] text-white ">
            Examinee Page
          </h2>
          <hr className="border-b-2 border-secondary" />

          {/* Questions Container */}
          <div className="mx-auto w-full max-w-[343px] max-h-full bg-primary opacity-80 rounded-2xl flex flex-col justify-start px-4 py-2 text-center gap-6 md:w-full md:max-w-[400px] lg:max-w-[750px]">
            {questions.length > 0 ? (
              questions.map((q) => (
                <div key={q.questionId} className="text-center">
                  <p className="text-light font-medium text-xl lg:text-2xl py-4 md:py-6">
                    {q.questionText}
                  </p>
                  <div className="text-left">
                    <label className="text-light font-light" htmlFor={`answer-${q.questionId}`}>
                      Answer
                    </label>
                    <input
                      type="text"
                      id={`answer-${q.questionId}`}
                      value={answers[q.questionId] || ""}
                      onChange={(e) => handleAnswerChange(q.questionId, e.target.value)}
                      className="w-full px-3 mt-2 py-2 border text-primary rounded focus:outline-none focus:ring border-secondary-300 mb-8"
                      required
                    />
                  </div>
                  <hr className="border-b-0 border-secondary" />
                </div>
              ))
            ) : (
              <p className="text-light font-medium text-xl lg:text-2xl py-4 md:py-6">
                No questions available for this quiz.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="font-normal w-full btn-bg flex justify-center gap-2 items-center text-md text-white py-3 rounded hover:bg-tertiary focus:outline-none focus:ring focus:ring-blue-300"
              onClick={handleSubmit}
            >
              Submit Answers
            </button>

            <Link to="/user">
              <button className="font-normal w-full text-tertiary border-tertiary border-2 flex justify-center gap-2 items-center text-md py-3 rounded hover:bg-tertiary hover:text-light focus:outline-none focus:ring focus:ring-blue-300">
                Back to Quiz Collections
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {score == questions.length ? <h2 className="text-2xl font-normal text-center text-black">Your Score 🎉</h2> : <h2 className="text-2xl font-normal text-center text-black">Your Score</h2>}
        <p className="text-8xl font-medium py-10 text-center text-secondary">{score}<span className="text-6xl opacity-80"> / {questions.length}</span></p>
        <div className="flex justify-end">
          <Link to="/user">
            <button
              type="button"
              onClick={handleCloseModal}
              className="opacity-80 hover:bg-acent hover:opacity-100 border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Back to Quizzes
            </button>
          </Link>
          <button
            type="button"
            className="bg-tertiary opacity-80 hover:bg-tertiary border-2 border-tertiary hover:opacity-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => window.location.reload()}
          >
            Retake Quiz
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Examinee;