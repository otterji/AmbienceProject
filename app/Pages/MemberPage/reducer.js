/*
 * Member Page reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_MEMBER } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  member: {
    name: '',
    position: '',
    description: '',
    intro: '',
    profileImg: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const memberReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MEMBER.REQUEST:
        draft.loading = true;
        break;
      case GET_MEMBER.SUCCESS:
        draft.loading = false;
        draft.member = action.member;
        break;
      case GET_MEMBER.FAIL:
        draft.loading = false;
        break;
    }
  });

export default memberReducer;
