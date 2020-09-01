/*
 * SchoolSelector reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_SCHOOL_LIST, SET_SCHOOL_ID } from './constants';

// The initial state of the App
export const initialState = {
  schoolList: [],
  loading: false,
  schoolId: null,
};

/* eslint-disable default-case, no-param-reassign */
const schoolSelectorReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SCHOOL_LIST.REQUEST:
        draft.loading = true;
        break;
      case GET_SCHOOL_LIST.SUCCESS:
        draft.loading = false;
        draft.schoolList = action.schoolList;
        break;
      case GET_SCHOOL_LIST.FAIL:
        draft.schoolList = [];
        draft.loading = false;
        break;

      case SET_SCHOOL_ID:
        draft.schoolId = action.schoolId;
        break;
    }
  });

export default schoolSelectorReducer;
