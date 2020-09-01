import { all, call, put, takeLatest } from 'redux-saga/effects';

import { push } from 'connected-react-router';
import { getRequest } from 'utils/request';
import { API_URL } from '../../constants';
import { GET_ARTICLE_LIST } from './constants';
import { groupList } from '../../utils/groupList';

export function* getArticleListSaga(action) {
  const { consult } = action;
  const payload = consult;

  const url = `${API_URL}/article/list`;

  try {
    const { articleList } = yield call(getRequest, { url, payload });
    const result = groupList({
      targetList: articleList.slice(1, articleList.length),
      count: 4,
    });
    yield put({
      type: GET_ARTICLE_LIST.SUCCESS,
      result,
      mainResearch: articleList[0],
    });
  } catch (err) {
    yield put({ type: GET_ARTICLE_LIST.FAIL });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_ARTICLE_LIST.REQUEST, getArticleListSaga)]);
}
