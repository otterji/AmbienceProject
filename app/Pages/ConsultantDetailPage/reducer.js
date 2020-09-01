/*
 * Consultant Detail reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_CONSULTANT } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  consultant: {
    name: '',
    type: '',
    grade: '',
    description: '',
    intro: '',
    profileImg: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const consultantDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CONSULTANT.REQUEST:
        draft.loading = true;
        break;
      case GET_CONSULTANT.SUCCESS:
        draft.loading = false;
        draft.consultant = action.consultant;
        break;
      case GET_CONSULTANT.FAIL:
        draft.loading = false;
        break;
    }
  });

export default consultantDetailReducer;
