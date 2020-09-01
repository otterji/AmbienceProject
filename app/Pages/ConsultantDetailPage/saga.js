import { all, call, put, takeLatest, delay } from 'redux-saga/effects';

import { getRequest } from 'utils/request';
import { push } from 'connected-react-router';
import { API_URL } from '../../constants';
import { GET_CONSULTANT } from './constants';
import { groupList } from '../../utils/groupList';
import { consultantData } from '../ConsultingPage/constants';

export function* getConsultantSaga(action) {
  const { consultantId } = action;
  const consultant = consultantData.find(x => x.id === Number(consultantId));

  // const url = `${API_URL}/article/one?articleId=${articleId}`;

  try {
    // const { article } = yield call(getRequest, { url });
    yield delay(500);
    yield put({ type: GET_CONSULTANT.SUCCESS, consultant });
  } catch (err) {
    yield put({ type: GET_CONSULTANT.FAIL });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_CONSULTANT.REQUEST, getConsultantSaga)]);
}
