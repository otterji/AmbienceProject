import { call, put, takeLatest, all } from 'redux-saga/effects';
import { postRequest } from 'utils/request';
import { API_URL } from '../../constants';
import { FIND_ID, FIND_PASSWORD } from './constants';

// Individual exports for testing
function* findIdSaga(action) {
  const { name, phoneNumber } = action;

  const url = `${API_URL}/auth/find/email`;

  const payload = {
    name,
    phoneNumber,
  };

  try {
    const result = yield call(postRequest, { url, payload });
    yield put({ type: FIND_ID.SUCCESS, result });
  } catch (error) {
    console.log(error);
    yield put({ type: FIND_ID.FAIL, error });
  }
}

function* findPasswordSaga(action) {
  const { email, phoneNumber } = action;

  const url = `${API_URL}/auth/find/password`;

  const payload = {
    email,
    phoneNumber,
  };

  try {
    yield call(postRequest, { url, payload });
    yield put({ type: FIND_PASSWORD.SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({ type: FIND_PASSWORD.FAIL, error });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(FIND_ID.REQUEST, findIdSaga)]);
  yield all([takeLatest(FIND_PASSWORD.REQUEST, findPasswordSaga)]);
}
