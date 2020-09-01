/*
 * Trend Page Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_ARTICLE_LIST = {
  REQUEST: 'Pulit/SchoolSelector/GET_ARTICLE_LIST_REQUEST',
  SUCCESS: 'Pulit/SchoolSelector/GET_ARTICLE_LIST_SUCCESS',
  FAIL: 'Pulit/SchoolSelector/GET_ARTICLE_LIST_FAIL',
};
