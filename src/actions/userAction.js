
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from './actionTypes';
  import authService from '../services/auth.service';
  
  export const login = (username, password) => {
    return async (dispatch) => {
      dispatch({ type: LOGIN_REQUEST });
      try {
        const user = await authService.login(username, password);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
        throw error;
      }
    };
  };
  
  export const logout = () => {
    authService.logout();
    return { type: LOGOUT };
  };