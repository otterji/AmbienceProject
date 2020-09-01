/*
 * SignInScreenReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { GET_DUPLICATE_MEMBER, POST_MEMBER } from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  failed: false,
  isDuplicated: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DUPLICATE_MEMBER.REQUEST:
      return state.set('loading', true).set('failed', false);
    case GET_DUPLICATE_MEMBER.SUCCESS:
      return state
        .set('loading', false)
        .set('isDuplicated', fromJS(action.result.isDuplicated));
    case GET_DUPLICATE_MEMBER.FAIL:
      return state.set('loading', false).set('failed', true);
    case POST_MEMBER.REQUEST:
      return state.set('loading', true).set('failed', false);
    case POST_MEMBER.SUCCESS:
      return state.set('loading', false);
    case POST_MEMBER.FAIL:
      return state.set('loading', false).set('failed', true);
    default:
      return state;
  }
}

export default loginReducer;
