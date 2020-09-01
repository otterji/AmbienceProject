import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getRequest } from 'utils/request';
import { push } from 'connected-react-router';
import { API_URL } from '../../constants';
import { GET_ARTICLE } from './constants';
import { groupList } from '../../utils/groupList';

export function* getArticleSaga(action) {
  const { articleId } = action;

  const url = `${API_URL}/article/one?articleId=${articleId}`;

  try {
    const { article } = yield call(getRequest, { url });
    yield put({ type: GET_ARTICLE.SUCCESS, article });
  } catch (err) {
    yield put({ type: GET_ARTICLE.FAIL });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_ARTICLE.REQUEST, getArticleSaga)]);
}
