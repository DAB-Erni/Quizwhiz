import axios from 'axios';

const API_URL = 'https://localhost:7173/api/CreatedQuiz';

// GET ALL QUIZZES
export const getAllQuizzes = async () => {
    return await axios.get(API_URL);
};

// GET QUIZZES BY ID
export const getQuizById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

// GET QUIZZES BY ID
export const createQuiz = async (quizData) => {
    return await axios.post(API_URL, quizData);
};

export const updateQuiz = async (id) => {
    return await axios.put(`${API_URL}/${id}`, quizData);
}

export const deleteQuiz = async (id) => {
    return await axios.delete(`${API_URL}/${id}`)
}