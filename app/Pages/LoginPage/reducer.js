/*
 * SignInScreenReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { LOGIN, KAKAO_LOGIN } from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  failed: false,
  id: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    // start login
    case LOGIN.REQUEST:
      return state.set('loading', true).set('failed', false);
    case LOGIN.SUCCESS:
      return state.set('loading', false);
    case LOGIN.FAIL:
      return state.set('loading', false).set('failed', true);
    case KAKAO_LOGIN.REQUEST:
      return state.set('loading', true).set('failed', false);
    case KAKAO_LOGIN.SUCCESS:
      return state.set('loading', false);
    case KAKAO_LOGIN.FAIL:
      return state.set('loading', false).set('failed', true);

    default:
      return state;
  }
}

export default loginReducer;

// 리듀서에는 로직 있으면 안됨 사가에서 하셈 (로그인 했을때 세션스토리지에 저장)
// nameInput 이렇게 키벨류로 프롭 바꾸기
// action {}로 바꾸기
// loading 분리하기
// 라디오태그는 constants 안에 checked 를 만들기 인덱스에서
