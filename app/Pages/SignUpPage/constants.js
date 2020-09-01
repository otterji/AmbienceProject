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

// 이메일 중복 체크 (일반 회원가입 경우)
export const GET_DUPLICATE_MEMBER = {
  REQUEST: 'Pulit/LoginPage/GET_DUPLICATE_MEMBER_REQUEST',
  SUCCESS: 'Pulit/LoginPage/GET_DUPLICATE_MEMBER_SUCCESS',
  FAIL: 'Pulit/LoginPage/GET_DUPLICATE_MEMBER_FAIL',
};

// 회원가입 (공통, 상세 정보 입력 후)
export const POST_MEMBER = {
  REQUEST: 'Pulit/LoginPage/POST_MEMBER_REQUEST',
  SUCCESS: 'Pulit/LoginPage/POST_MEMBER_SUCCESS',
  FAIL: 'Pulit/LoginPage/POST_MEMBER_FAIL',
};
