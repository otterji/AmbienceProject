import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getRequest, postRequest } from 'utils/request';
import { API_URL } from '../../constants';
import { GET_SCHOOL_LIST, POST_SCHOOL, SET_SCHOOL_ID } from './constants';

export function* getSchoolListSaga(action) {
  const { schoolName } = action;
  const url = `${API_URL}/school/name?q=${schoolName}`;

  try {
    const { schoolList } = yield call(getRequest, { url });
    const transformed = schoolList.map(x => ({
      ...x,
      label: `${x.schoolName}(${x.address ? x.address : ''})`,
    }));

    yield put({ type: GET_SCHOOL_LIST.SUCCESS, schoolList: transformed });
  } catch (err) {
    yield put({ type: GET_SCHOOL_LIST.FAIL });
  }
}

export function* postSchoolSaga(action) {
  const { schoolName } = action;
  const url = `${API_URL}/school/name`;

  const payload = {
    name: schoolName,
  };

  try {
    const { insertId } = yield call(postRequest, { url, payload });
    yield put({ type: POST_SCHOOL.SUCCESS, insertId });
    yield put({ type: SET_SCHOOL_ID, schoolId: insertId });
    yield put({ type: GET_SCHOOL_LIST.REQUEST, schoolName });
  } catch (err) {
    yield put({ type: POST_SCHOOL.FAIL });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_SCHOOL_LIST.REQUEST, getSchoolListSaga),
    takeLatest(POST_SCHOOL.REQUEST, postSchoolSaga),
  ]);
}
