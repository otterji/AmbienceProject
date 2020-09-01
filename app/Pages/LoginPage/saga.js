import { call, put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { postRequest } from 'utils/request';
import { API_URL } from '../../constants';
import { LOGIN, KAKAO_LOGIN } from './constants';

// Individual exports for testing
function* loginSaga(action) {
  const { id, password } = action;

  const url = `${API_URL}/auth/login`;

  const payload = {
    id,
    password,
  };

  try {
    yield call(postRequest, { url, payload });
    yield put({ type: LOGIN.SUCCESS });
    yield put(push(`/`));
  } catch (error) {
    console.log(error);
    yield put({ type: LOGIN.FAIL, error });
  }
}

function* kakaoLoginSaga(action) {
  const url = `${API_URL}/auth/login`;

  try {
    yield call(postRequest, { url });
    yield put({ type: KAKAO_LOGIN.SUCCESS });
    yield put(push(`/`));
  } catch (error) {
    console.log(error);
    yield put({ type: KAKAO_LOGIN.FAIL, error });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(LOGIN.REQUEST, loginSaga)]);
  yield all([takeLatest(KAKAO_LOGIN.REQUEST, kakaoLoginSaga)]);
}
