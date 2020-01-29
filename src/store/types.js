// User reducer types
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Register reducer types
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_NEXT = 'REGISTER_NEXT';
export const REGISTER_PREV = 'REGISTER_PREV';
export const REGISTER_CONFIRM = 'REGISTER_CONFIRM';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

// UI reducer types
export const SET_ERRORS = 'SET_ERRORS';
export const LOADING_UI = 'LOADING_UI';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const LOADING_DATA = 'LOADING_DATA';
export const STOP_LOADING_UI = 'STOP_LOADING_UI';

// Patient reducer types
export const FETCH_PATIENTS_START = 'FETCH_PATIENTS_START';
export const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
export const FETCH_PATIENTS_FAIL = 'FETCH_PATIENTS_FAIL';

export const GET_PATIENT = 'GET_PATIENT';
export const POST_PATIENT = 'POST_PATIENT';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';