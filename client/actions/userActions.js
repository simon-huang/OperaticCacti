import axios from 'axios';
import { browserHistory } from 'react-router';

export function submitLoginUser(user) {
  return dispatch => (
    axios.post('/auth/login', user).then(resp => {
      if (resp.status === 200) {
        dispatch(assignUser(resp.data[0]));
        browserHistory.push('/users/' + resp.data[0]);
      }
    }).catch(err => {
      dispatch(assignLoginError(err));
    })
  );
}

export function submitLogout() {
  return dispatch => (
    axios.get('/auth/logout').then((response) => {
      dispatch(logoutUser());
      browserHistory.push('/');
    }).catch(err => {
      dispatch(logoutError());
    })
  );
}


export function assignUser(user) {
  return {
    type: "LOGIN_SUCCESSFUL",
    user: user
  };
}

export function assignLoginError(err) {
  return {
    type: "LOGIN_ERROR",
    err: err
  };
}

export function logoutUser() {
  return {
    type: 'LOGOUT_SUCCESSFUL'
  };
}

export function logoutError() {
  return {
    type: "LOGOUT_ERROR",
    err: err
  };
}

export function setAuthInput(item, value) {
  var toReturn = {
    type: 'SET_AUTH_INPUT_' + item.toUpperCase(),
  };

  toReturn[item.toLowerCase()] = value;

  return toReturn;
}
