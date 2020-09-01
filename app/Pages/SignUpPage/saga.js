import { call, put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getRequest } from 'utils/request';
import { API_URL } from '../../constants';
import { GET_DUPLICATE_MEMBER, POST_MEMBER } from './constants';

// Individual exports for testing
function* getDuplicatedSaga(action) {
  console.log(action);
  const { email } = action;
  const url = `${API_URL}/auth/email/check?q=${email}`;
  try {
    const result = yield call(getRequest, { url });
    yield put({ type: GET_DUPLICATE_MEMBER.SUCCESS, result });
  } catch (error) {
    console.log(error);
    yield put({ type: GET_DUPLICATE_MEMBER.FAIL, error });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_DUPLICATE_MEMBER.REQUEST, getDuplicatedSaga)]);
}
