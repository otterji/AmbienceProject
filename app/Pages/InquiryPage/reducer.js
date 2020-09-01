/*
 * Inquiry reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { POST_CONSULT } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const inquiryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POST_CONSULT.REQUEST:
        draft.loading = true;
        break;
      case POST_CONSULT.SUCCESS:
        draft.loading = false;
        break;
      case POST_CONSULT.FAIL:
        draft.loading = false;
        break;
    }
  });

export default inquiryReducer;
