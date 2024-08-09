import axios from 'axios';

const API_URL = 'https://localhost:7173/api/CreatedQuiz';
const QUESTION_API_URL = 'https://localhost:7173/api/Question';
const TAKEQUIZ_API_URL = 'https://localhost:7173/api/TakeQuiz/';

// GET ALL QUIZZES
export const getAllQuizzes = async () => {
    return await axios.get(API_URL);
};

// GET QUIZZES BY ID
export const getQuizById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

// CREATE QUIZ
export const createQuiz = async (quizData) => {
    return await axios.post(API_URL, quizData);
};

// UPDATE QUIZ
export const updateQuiz = async (id, updatedData) => {
    return await axios.put(`${API_URL}/${id}`, updatedData);
};

// DELETE QUIZ
export const deleteQuiz = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};

// ADD QUESTION TO QUIZ
export const addQuestionToQuiz = async (quizId, questionData) => {
  try {
    const response = await axios.post(`${QUESTION_API_URL}/${quizId}/questions`, questionData);
    return response;
  } catch (error) {
    console.error('Error in addQuestionToQuiz:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// UPDATE QUESTION
export const updateQuestion = async (quizId, questionId, updatedData) => {
    const url = `${QUESTION_API_URL}/${quizId}/questions/${questionId}`;
    try {
        const response = await axios.put(url, updatedData);
        return response;
    } catch (error) {
        console.error('Error in updateQuestion:', error.response ? error.response.data : error.message);
        throw error;
    }
};

//DELETE QUESTION
export const deleteQuestion = async (quizId, questionId) => {
    const url = `${QUESTION_API_URL}/${quizId}/questions/${questionId}`;
    try {
        const response = await axios.delete(url);
        return response;
    } catch (error) {
        console.error('Error in deleteQuestion:', error.response ? error.response.data : error.message);
        throw error;
    }
};


//GET QUESTIONS FOR QUIZZES
export const getQuestionsForQuiz = async () => {
    return await axios.get(API_URL);
}

// SUBMIT ANSWERS
export const submitAnswers = async (quizId, answers) => {
    try {
        const response = await axios.post(`${TAKEQUIZ_API_URL}submit`, {
            createdQuizId: quizId,
            userId: 2,
            answer: Object.values(answers)
        });
        return response;
    } catch (error) {
        console.error('Error in submitAnswers:', error.response ? error.response.data : error.message);
        throw error;
    }
};