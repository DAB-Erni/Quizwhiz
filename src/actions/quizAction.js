import {
    FETCH_QUIZZES_REQUEST,
    FETCH_QUIZZES_SUCCESS,
    FETCH_QUIZZES_FAILURE,
    CREATE_QUIZ_SUCCESS,
    CREATE_QUIZ_FAILURE,
} from './actionTypes';

import { getAllQuizzes, createQuiz } from '../services/quizService';

export const fetchQuizzes = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_QUIZZES_REQUEST});
        try {
            const response = await getAllQuizzes();
            dispatch({type: FETCH_QUIZZES_SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({type: FETCH_QUIZZES_FAILURE, payload: error.message});
        }
    };
};

export const addQuiz = (quizData) => {
    return async (dispatch) => {
        try {
            const response = await createQuiz(quizData);
            dispatch({type: CREATE_QUIZ_SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({type: CREATE_QUIZ_FAILURE, payload: error.message});
        }
    };
};