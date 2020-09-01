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

// 아이디 찾기 (이름, 생년월일 입력하면 rkd***@naver.com 으로 알려줄 예정)
export const FIND_ID = {
  REQUEST: 'Pulit/LoginPage/FIND_ID_REQUEST',
  SUCCESS: 'Pulit/LoginPage/FIND_ID_SUCCESS',
  FAIL: 'Pulit/LoginPage/FIND_ID_FAIL',
};

// 비밀번호 찾기 (이메일 입력하면 일회용 비밀번호 가입한 이메일로 전송)
export const FIND_PASSWORD = {
  REQUEST: 'Pulit/LoginPage/FIND_PASSWORD_REQUEST',
  SUCCESS: 'Pulit/LoginPage/FIND_PASSWORD_SUCCESS',
  FAIL: 'Pulit/LoginPage/FIND_PASSWORD_FAIL',
};

export const RESET_ID = {
  REQUEST: 'Pulit/LoginPage/RESET_ID_REQUEST',
  SUCCESS: 'Pulit/LoginPage/RESET_ID_SUCCESS',
  FAIL: 'Pulit/LoginPage/RESET_ID_FAIL',
};
