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

import { FIND_ID, FIND_PASSWORD, RESET_ID } from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  failed: false,
  name: '',
  email: '',
  phoneNumber: '',
  foundId: '',
});

function findReducer(state = initialState, action) {
  switch (action.type) {
    // start login
    case FIND_ID.REQUEST:
      return state.set('loading', true).set('failed', false);
    case FIND_ID.SUCCESS:
      return state
        .set('loading', false)
        .set('foundId', fromJS(action.result.email));
    case FIND_ID.FAIL:
      return state.set('loading', false).set('failed', true);
    case FIND_PASSWORD.REQUEST:
      return state.set('loading', true).set('failed', false);
    case FIND_PASSWORD.SUCCESS:
      return state.set('loading', false);
    case FIND_PASSWORD.FAIL:
      return state.set('loading', false).set('failed', true);

    case RESET_ID.REQUEST:
      return state.set('loading', true).set('foundId', '');
    case RESET_ID.SUCCESS:
      return state.set('loading', false);
    case RESET_ID.FAIL:
      return state.set('loading', false).set('failed', true);

    default:
      return state;
  }
}

export default findReducer;
