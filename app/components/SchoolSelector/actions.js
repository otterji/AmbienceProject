/*
 * School Selector Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { GET_SCHOOL_LIST, POST_SCHOOL, SET_SCHOOL_ID } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} schoolName The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */

export function getSchoolListAction(schoolName) {
  return {
    type: GET_SCHOOL_LIST.REQUEST,
    schoolName,
  };
}

export function postSchoolAction(schoolName) {
  return {
    type: POST_SCHOOL.REQUEST,
    schoolName,
  };
}

export function setSchoolIdAction(id) {
  return {
    type: SET_SCHOOL_ID,
    schoolId: id,
  };
}
