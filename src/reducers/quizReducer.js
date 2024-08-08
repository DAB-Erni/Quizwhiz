import {
    FETCH_QUIZZES_REQUEST,
    FETCH_QUIZZES_SUCCESS,
    FETCH_QUIZZES_FAILURE,
    CREATE_QUIZ_SUCCESS,
    CREATE_QUIZ_FAILURE,
} from '../actions/actionTypes';

const initialState = {
    quizzes: [],
    loading: false,
    error: null,
}

const quizReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUIZZES_REQUEST:
            return { ...state, loading: true };
        case FETCH_QUIZZES_SUCCESS:
            return { ...state, loading: false, quizzes: action.payload };
        case FETCH_QUIZZES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CREATE_QUIZ_SUCCESS:
            return {...state, quizzes: [...state.quizzes, action.payload]};
        case CREATE_QUIZ_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
};

export default quizReducer;