import {SET_PROFILE, SET_LOGGED_IN_USER, SET_LOGOUT, UPDATE_PROFILE} from '../actionsTypes';
import local from '../local';

export const setAuthenticated = userid => dispatch => {
  return dispatch({type: SET_LOGGED_IN_USER, payload: userid});
};


export const setUserProfile = data => dispatch => {
  return dispatch({type: SET_PROFILE, payload: data});
};

export const updateProfilePicture = data => dispatch => {
  return dispatch({type: UPDATE_PROFILE, payload: data});
};


export const logout = () => dispatch => {
  local.remove(local.keys.AUTH)
  return dispatch({type: SET_LOGOUT,});
};
