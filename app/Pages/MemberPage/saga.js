import { all, call, put, takeLatest, delay } from 'redux-saga/effects';

import { getRequest } from 'utils/request';
import { push } from 'connected-react-router';
import { API_URL } from '../../constants';
import { GET_MEMBER } from './constants';
import { groupList } from '../../utils/groupList';
import { memberData } from '../TechPage/constant';

export function* getMemberSaga(action) {
  const { memberId } = action;
  const member = memberData.find(x => x.id === Number(memberId));

  // const url = `${API_URL}/article/one?articleId=${articleId}`;

  try {
    // const { article } = yield call(getRequest, { url });
    yield delay(500);
    yield put({ type: GET_MEMBER.SUCCESS, member });
  } catch (err) {
    yield put({ type: GET_MEMBER.FAIL });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_MEMBER.REQUEST, getMemberSaga)]);
}
