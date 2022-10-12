import { del, get, post } from './request.js';

const URL = 'api/v1/auth';

export async function signUpUser(credentials) {
  const resp = await post(`${URL}/signin`, credentials);
  resp.user = resp.data;
  return resp;
}

export async function signInUser(credentials) {
  const resp = await post(`${URL}/signin`, credentials);
  resp.user = resp.data;
  return resp;
}

export async function signOutUser() {
  const resp = await del(`${URL}/signout`);
  return resp;
}

export async function verifyUser() {
  const resp = await get(`${URL}/verify`);
  resp.user = resp.data;
  return resp;
}

const USER_KEY = 'USER';

export function storeLocalUser(user) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else localStorage.removeItem(USER_KEY);
}

export function getLocalUser() {
  const json = localStorage.getItem(USER_KEY);
  try {
    if (json) {
      return JSON.parse(json);
    }
  } catch (e) {
    storeLocalUser();
  }
}
