/*
 * School Selector Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_SCHOOL_LIST = {
  REQUEST: 'Pulit/SchoolSelector/GET_SCHOOL_LIST_REQUEST',
  SUCCESS: 'Pulit/SchoolSelector/GET_SCHOOL_LIST_SUCCESS',
  FAIL: 'Pulit/SchoolSelector/GET_SCHOOL_LIST_FAIL',
};

export const POST_SCHOOL = {
  REQUEST: 'Pulit/SchoolSelector/POST_SCHOOL_REQUEST',
  SUCCESS: 'Pulit/SchoolSelector/POST_SCHOOL_SUCCESS',
  FAIL: 'Pulit/SchoolSelector/POST_SCHOOL_FAIL',
};

export const SET_SCHOOL_ID = 'Pulit/SchoolSelector/SET_SCHOOL_ID';
