import axios from "axios";
import { AsyncStorage } from 'react-native';
import * as types from "../constant";
import {
  NavigationActions,
} from 'react-navigation';

import {
  API_URL
} from '../../../config';

export function checkEmailLogin(email) {
  return dispatch => {
    const request = axios.post(`${API_URL}/checkEmailLogin`, { email: email });
    request
      .then(({data}) => {
        console.log('data.response', data.response);
        dispatch({
          type: types.USER_EXISTS,
          payload: data.response
        });
      })
      .catch(({error}) => {
        console.log(error);
      })
  }
}

export function checkEmailRegistration(email) {
  return dispatch => {
    const request = axios.post(`${API_URL}/checkEmailRegistration`, { email: email });
    request
      .then(({data}) => {
        dispatch({
          type: types.USER_EXISTS,
          payload: data.response
        });
      })
      .catch(({error}) => {
        console.log(error);
      })
  }
}

export function signIn(email, password, navigation) {
  return dispatch => {

    const request = axios.post(`${API_URL}/signin`, { email: email, password: password});
    request
      .then(({data}) => {
        if (data.response.user) {
          AsyncStorage.setItem('@MySuperStore:access_token', data.response.user.token);
          dispatch({
            type: types.AUTH,
            payload: data.response
          });
          navigation.navigate('Main');
        } else {
          AsyncStorage.setItem('@MySuperStore:access_token', '');
          dispatch({
            type: types.AUTH,
            payload: data.response
          });
        }
      })
      .catch(({error}) => {
        console.log(error);
      })
  }
}

export function signUp(email, name, password, repeatPassword, navigation) {
  return dispatch => {

    const request = axios.post(`${API_URL}/signup`, { email: email, name: name, password: password, repeat_password: repeatPassword });
    request
      .then(({data}) => {
        if (data.response.user && !data.response.user.clientError) {
          dispatch({
            type: types.AUTH,
            payload: data.response
          });

          navigation.navigate('SignIn');
        } else {
          AsyncStorage.setItem('access_token', '');
          dispatch({
            type: types.AUTH,
            payload: data.response
          });
        }
      })
      .catch(({error}) => {
        console.log(error);
      })
  }
}

export function logOut() {
  return dispatch => {
    dispatch({
      type: types.USER_EXISTS,
      payload: { user: null, user_exists: null, clientError: null }
    });
  }
}