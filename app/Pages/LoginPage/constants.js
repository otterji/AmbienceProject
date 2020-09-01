/*
 * Consultant Detail Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// 로그인 (일반일 경우, 카카오는 승인되면 바로 로그인되게)
export const LOGIN = {
  REQUEST: 'Pulit/LoginPage/LOGIN_REQUEST',
  SUCCESS: 'Pulit/LoginPage/LOGIN_SUCCESS',
  FAIL: 'Pulit/LoginPage/LOGIN_FAIL',
};

export const KAKAO_LOGIN = {
  REQUEST: 'Pulit/LoginPage/KAKAO_LOGIN_REQUEST',
  SUCCESS: 'Pulit/LoginPage/KAKAO_LOGIN_SUCCESS',
  FAIL: 'Pulit/LoginPage/KAKAO_LOGIN_FAIL',
};
