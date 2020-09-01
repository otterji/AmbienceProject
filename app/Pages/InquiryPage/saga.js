import { all, call, put, takeLatest } from 'redux-saga/effects';

import { postRequest } from 'utils/request';
import { push } from 'connected-react-router';
import { API_URL } from '../../constants';
import { POST_CONSULT } from './constants';

export function* postConsultSaga(action) {
  const { consult } = action;
  const payload = consult;

  const url = `${API_URL}/apply`;

  try {
    yield call(postRequest, { url, payload });
    yield put({ type: POST_CONSULT.SUCCESS });
    yield put(push('/applied'));
  } catch (err) {
    yield put({ type: POST_CONSULT.FAIL });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(POST_CONSULT.REQUEST, postConsultSaga)]);
}
